import React from 'react'
import { DashedLine, Line } from './Line'

type sphereProps = {
  radius: number,
  width: number,
  height: number
  sphereScale: number,
  lineScale: number,
  dashedLineScale: number
}
type sphereLineProps = {
  sensibility: number,
  width: number, 
  radius: number,
  scale: number
}

const sensibility = 1500
const quantityOfSteps = 8
const piStep = Math.PI/quantityOfSteps
const rotationSteps: number[] = []

for (let i = 0; i < quantityOfSteps; i++)
  rotationSteps.push(i * piStep)

function SphereLine(props: sphereLineProps) {
  return(
    <React.Fragment>
      {rotationSteps.map((rotation, index) =>
        <DashedLine
          key={index}
          sensibility={props.sensibility}
          width={props.width}
          radius={props.radius}
          scale={props.scale}
          rotation={rotation}
        />
      )}
    </React.Fragment>
  )
}

function Sphere(props: sphereProps) {
  const {
    height, width, radius, 
    lineScale, dashedLineScale, 
    sphereScale
  } = props

  return (
    <React.Fragment>
      <Line
        width={width}
        radius={radius}
        scale={lineScale}
      />
      <SphereLine
        width={width}
        radius={radius}
        scale={dashedLineScale}
        sensibility={sensibility}
      /> 
      <mesh scale={sphereScale}>
        <sphereGeometry args={[radius, width, height]}/>
        <meshStandardMaterial/>
      </mesh>
    </React.Fragment>
  )
}

export {Sphere}