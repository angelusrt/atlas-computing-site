import React, { useEffect, useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import { BufferGeometry } from 'three'

import {
  getCirclePoints, useRotateOnMouse, useSetGeometry
} from '../../functions/geometry'
import { useAnimateOnView } from '../../functions/transition'
import { trans } from "../../functions/function.types"

const width = 100
const height = 100
const radius = 1

const lineScale = 2.9

const dashedLineScale = 2.51
const dashedLineSensibility = 1500

const sphereLineQuantity = 8
const sphereLineStep = Math.PI/sphereLineQuantity

const sphereScale = 2.5

type SphereType = {
  isMobile: boolean,
  isVisible: boolean,
  setIsVisible: (state: boolean) => void
}

const Line = () => {
  const ref = useRef<BufferGeometry>(null!)

  const points = getCirclePoints(width, radius)

  useSetGeometry({
    ref, 
    points, 
    scale: lineScale, 
    rotation: 0
  })

  return(
    <line>
      <bufferGeometry ref={ref}/>
      <lineBasicMaterial
        color="#000000"
        linewidth={3}
      />
    </line>
  )
}

const DashedLine = (prop: {rotation: number, isVisible: boolean}) => {
  const {rotation, isVisible} = prop
  
  const lineRef = useRef<THREE.LineSegments>(null!)
  const geometryRef = useRef<BufferGeometry>(null!)
  
  useSetGeometry({
    points: getCirclePoints(width, radius), 
    rotation,
    ref: geometryRef, 
    scale: dashedLineScale, 
  })
  useRotateOnMouse({
    isVisible,
    ref: lineRef, 
    sensibility: dashedLineSensibility, 
  })
  useFrame(
    () => lineRef.current.rotation.y += 0.002, 
    isVisible ? 0 : 1
  )

  return(
    <lineSegments ref={lineRef}>
      <bufferGeometry ref={geometryRef}/>
      <lineDashedMaterial
        color="#000000"
        linewidth={3}
        dashSize={3}
        gapSize={3}
        scale={2}
      />
    </lineSegments>
  )
}

const SphereLine = (prop: {isVisible: boolean}) => {
  const {isVisible} = prop
  const steps: number[] = []
  
  for (let i = 0; i < sphereLineQuantity; i++)
    steps.push(i * sphereLineStep)
  
  return (
    <React.Fragment children={ steps.map( rotation =>
      DashedLine({rotation, isVisible})
    )}/>
  )
}

const Sphere = (prop: SphereType) => {
  const {isMobile, isVisible, setIsVisible} = prop

  const options = {...trans, start: isMobile ? 1000 : 0}
  
  useAnimateOnView('.canvas-globe', options)

  useEffect(() => {
    function onCanvasView() {
      const isScrollAfterGlobe = window.scrollY > 490

      if(!isScrollAfterGlobe && !isVisible)
        setIsVisible(true)
      else if(isScrollAfterGlobe && isVisible)
        setIsVisible(false)
    }
    
    window.addEventListener("scroll", onCanvasView)

    return () => window.removeEventListener("scroll", onCanvasView)
  },[isVisible, setIsVisible])
  
  return(
    <React.Fragment>
      <Line/>
      <SphereLine isVisible={prop.isVisible}/> 
      <mesh scale={sphereScale}>
        <sphereGeometry args={[radius, width, height]}/>
        <meshStandardMaterial/>
      </mesh>
    </React.Fragment>
  ) 
}

export {Sphere}