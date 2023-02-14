import React, { useMemo, useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import { BufferGeometry } from 'three'

import { 
  iDashedLine, 
  iLine, 
  iSphere, 
  iSphereLine 
} from './Canvas.types'
import { 
  createPointsOfCircle,
  useRotateWhenMouseMove,
  useSetGeometry
} from '../../functions/utils'


const Line = (props: iLine) => {
  const {scale, radius, width} = props

  const ref = useRef<BufferGeometry>(null!)

  const points = createPointsOfCircle(width, radius)
  const obj = {ref, points, scale, rotation: 0}

  useSetGeometry(obj)

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

const DashedLine = (props: iDashedLine) => {
  const {
    scale, rotation, radius, width, sensibility, isVisible
  } = props

  const points = useMemo(
    () => createPointsOfCircle(width, radius), 
  [width, radius])
  
  const lineRef = useRef<THREE.LineSegments>(null!)
  const geometryRef = useRef<BufferGeometry>(null!)
  
  const obj = useMemo(() => {
    return {ref: geometryRef, points, scale, rotation}},
  [geometryRef, points, scale, rotation])
  
  useSetGeometry(obj)
  useRotateWhenMouseMove({ref: lineRef, sensibility, isVisible})
  useFrame(
    () => lineRef.current.rotation.y += 0.005, 
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

const SphereLine = (prop: iSphereLine) => {
  const piStep = Math.PI/prop.lineQuantity
  const steps: number[] = []
  
  for (let i = 0; i < prop.lineQuantity; i++)
    steps.push(i * piStep)
  
  return <React.Fragment children={ 
    steps.map((rotation, index) =>
      <DashedLine
        key={index}
        isVisible={prop.isVisible}
        sensibility={prop.sensibility}
        width={prop.width}
        radius={prop.radius}
        scale={prop.scale}
        rotation={rotation}
      />
    )
  }/>
}

const Sphere = (prop: iSphere) => (
  <React.Fragment>
    <Line
      width={prop.width}
      radius={prop.radius}
      scale={prop.lineScale}
    />
    <SphereLine
      isVisible={prop.isVisible}
      width={prop.width}
      radius={prop.radius}
      scale={prop.dashedLineScale}
      lineQuantity={prop.lineQuantity}
      sensibility={prop.sensibility}
    /> 
    <mesh scale={prop.scale}>
      <sphereGeometry 
        args={[prop.radius, prop.width, prop.height]}
      />
      <meshStandardMaterial/>
    </mesh>
  </React.Fragment>
)

export {Sphere}