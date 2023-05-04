"use client"

import React, { Suspense, useEffect, useMemo, useRef } from 'react'

import { useFrame } from '@react-three/fiber/'
import { BufferGeometry } from 'three/src/core/BufferGeometry'
import { Color } from 'three/src/math/Color'

import {getCirclePoints} from '../../functions/geometry'
import { useAnimateOnView } from '../../functions/transition'

const width = 100
const height = 100
const radius = 1
const stepAmount = 8
//const dashedLineSensibility = 1500
const color: Color = new Color("#000000")

const step = Math.PI/stepAmount
const steps: number[] = [
  0, step, 2*step, 3*step, 4*step, 5*step, 6*step, 7*step
]

const sphereScale = 2.5

type SphereType = {
  isMobile: boolean,
  isVisible: boolean,
}

const Line = () => {
  const ref = useRef<BufferGeometry>(null!)

  useEffect(() => {
    const points = getCirclePoints(width, radius)

    const geometry = ref.current
  
    geometry.computeBoundingSphere()
    geometry.setFromPoints(points) 
    geometry.scale(2.9, 2.9, 2.9) 
    geometry.rotateY(0)
  }, [])
  
  return(
    <line>
      <bufferGeometry ref={ref}/>
      <lineBasicMaterial color={color} linewidth={3}/>
    </line>
  )
}

const DashedLine = (
  prop: {rotation: number, isVisible: boolean}
) => {
  const {rotation} = prop
  
  const lineRef = useRef<THREE.LineSegments>(null!)
  const geometryRef = useRef<BufferGeometry>(null!)

  useEffect(() => {
    const points = getCirclePoints(width, radius)

    const geometry = geometryRef.current
  
    geometry.computeBoundingSphere()
    geometry.setFromPoints(points) 
    geometry.scale(2.51, 2.51, 2.51) 
    geometry.rotateY(rotation)
  }, [])

  useFrame(() => lineRef.current.rotation.y += 0.002, 0)

  return(
    <lineSegments ref={lineRef}>
      <bufferGeometry ref={geometryRef}/>
      <lineDashedMaterial
        color={color} linewidth={3} dashSize={3} gapSize={3} scale={2}
      />
    </lineSegments>
  )
}

const Sphere = (prop: SphereType) => {
  const {isMobile, isVisible} = prop

  const options = useMemo(() => {
    return {
      isTransition: true,
      isDelayChild: false,
      delayPerItem: 0,
      timeout: 200,
      index: 0,
      start: isMobile ? 300 : 0
    }
  },[isMobile])

  useAnimateOnView('.canvas-globe', options)
  
  return(
    <Suspense>
      <Line/>
      {steps.map((e, i) =>
        <DashedLine key={i} rotation={e} isVisible={isVisible}/>
      )}
      <mesh scale={sphereScale}>
        <sphereGeometry args={[radius, width, height]}/>
        <meshStandardMaterial/>
      </mesh>
    </Suspense>
  ) 
}

export default Sphere