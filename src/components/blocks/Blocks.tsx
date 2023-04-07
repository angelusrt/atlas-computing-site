import React, { Suspense, useState } from "react"
import { Canvas as Can } from "@react-three/fiber"

import { useAnimateOnView } from "../../functions/transition"
import Sphere from "./Sphere"
import Lighthouse from "./Lighthouse"

import { 
  BlockType,
  CanvasType,
  canvasPosDic,
  canvasIntensityDic,
} from "./Blocks.types"

import "./blocks.css"
import "./sections.css"

const blockTrans = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 200,
  timeout: 200,
  start: 400,
  index: 0,
}

const Block = (prop: BlockType) => {
  const {name, blockRef, children, style, func} = prop

  useAnimateOnView('.block-project', blockTrans)
  useAnimateOnView('.block-about', blockTrans)

  return(
    <prop.type 
      ref={blockRef} 
      className={name} 
      style={style}
      {...func}
    >
      {children}
    </prop.type>
  )
}

const Canvas = (prop: CanvasType) => {
  const {isMobile, name} = prop

  const [isVisible, setIsVisible] = useState(true)
  
  const isGlobe = name === "canvas-globe"

  const canvasStyle: React.CSSProperties[] = [
    {position: "relative", height: "400px"},
    {position: "absolute", height: "100%", width: "100%"}
  ] 

  function getObj(): JSX.Element {
    const options = {isMobile, isVisible, setIsVisible}
   
    if(isGlobe)
      return <Sphere {...options}/>
    else 
      return <Lighthouse isMobile={isMobile}/>
  }

  return(
    <Can
      className={"canvas " + name} 
      style={isGlobe ? canvasStyle[0] : canvasStyle[1]} 
    >
      <pointLight 
        position={canvasPosDic[name]} 
        intensity={canvasIntensityDic[name]}
      />
      <ambientLight
        position={canvasPosDic[name]}
        intensity={0.01}
      />
      <Suspense fallback={null}>
        {getObj()}
      </Suspense>
    </Can>
  )
}

export {
  Block, 
  Canvas,
}