import React, { useState } from 'react'
import { Canvas as Can } from "@react-three/fiber"
import { Lighthouse } from './Lighthouse'
import { Sphere } from "./Sphere"
import "./canvas.css"

type CanvasNameType = "canvas-globe" | "canvas-values"

type CanvasType = { 
  isMobile: boolean,
  name: CanvasNameType
}

type positionType = Record<CanvasNameType, [number, number, number]>
type intensityType = Record<CanvasNameType, number>

const position: positionType = {
  "canvas-globe": [-50, 60, 100],
  "canvas-values": [250, 50, 50]
}
const intensity: intensityType = {
  "canvas-globe": 8,
  "canvas-values": 6
}

const Canvas = (prop: CanvasType) => {
  const {isMobile, name} = prop

  const [isVisible, setIsVisible] = useState(true)
  
  function getObj(): JSX.Element {
    const isGlobe = name === "canvas-globe"
    const options = {isMobile, isVisible, setIsVisible}
   
    if(isGlobe)
      return Sphere(options)
    else 
      return <Lighthouse isMobile={isMobile}/>
  }

  return(
    <Can
      className={"canvas " + name} 
      style={{position: "absolute"}} 
    >
      <pointLight 
        position={position[name]} 
        intensity={intensity[name]}
      />
      <ambientLight
        position={position[name]}
        intensity={0.01}
      />
      {getObj()}
    </Can>
  )
}

export {Canvas}