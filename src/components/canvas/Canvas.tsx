import React, { useState } from 'react'
import { Canvas as Can } from "@react-three/fiber"
import { Lighthouse } from './Lighthouse'
import { Sphere } from "./Sphere"
import "./canvas.css"

type CanvasType = {
  isMobile: boolean,
  name: "canvas-globe" | "canvas-values"
}

type positionType = {
  "canvas-globe": [number, number, number],
  "canvas-values": [number, number, number]
}

const position: positionType = {
  "canvas-globe": [-50, 60, 100],
  "canvas-values": [-8, 8, 8]
}

const Canvas = (prop: CanvasType) => {
  const {isMobile, name} = prop

  const [isVisible, setIsVisible] = useState(true)

  const isGlobe = name === "canvas-globe"
  const options = {isMobile, isVisible, setIsVisible}

  const Obj: JSX.Element = isGlobe ? Sphere(options) : Lighthouse()
  
  return(
    <Can
      className={"canvas " + name}
      style={{
        position: 'absolute',
        height: isMobile ? 400 : 725,
        width: isMobile ? 400 : 725 
      }} 
    >
      <pointLight 
        position={position[name]} 
        intensity={8}
      />
      {Obj}
    </Can>
  )
}

export {Canvas}