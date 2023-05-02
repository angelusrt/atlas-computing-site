import React, { Suspense, useState } from "react"
import { Canvas as Can } from "@react-three/fiber"
import Lighthouse from "./Lighthouse"
import Sphere from "./Sphere"
import "./Canvas.css"

type CanvasNameType = "canvas-globe" | "canvas-values"

type positionType = Record<CanvasNameType, [number, number, number]>
type intensityType = Record<CanvasNameType, number>

const canvasPosDic: positionType = {
  "canvas-globe": [-50, 60, 100],
  "canvas-values": [250, 50, 50]
}

const canvasIntensityDic: intensityType = {
  "canvas-globe": 8,
  "canvas-values": 6
}

type CanvasType = { 
  isMobile: boolean,
  name: CanvasNameType
}

const Canvas = (prop: CanvasType) => {
  const {isMobile, name} = prop

  const [isVisible, setIsVisible] = useState(true)
  
  const isGlobe = name === "canvas-globe"

  const canvasStyle: React.CSSProperties[] = [
    {position: "absolute", height: "100%", width: "100%"},
    {position: "relative", height: "400px"}
  ] 

  function getObj(): JSX.Element {
    const options = {isMobile, isVisible, setIsVisible}
   
    if(isGlobe)
      return <Sphere {...options}/>
    else 
      return <Lighthouse isMobile={isMobile}/>
  }

  return(
    <Can className={"canvas " + name} style={canvasStyle[+isGlobe]}>
      <pointLight position={canvasPosDic[name]} intensity={canvasIntensityDic[name]}/>
      <ambientLight position={canvasPosDic[name]} intensity={0.01}/>
      <Suspense fallback={null}>{getObj()}</Suspense>
    </Can>
  )
}

export {Canvas}

