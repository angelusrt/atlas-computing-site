import React, {useEffect, useMemo, useState } from 'react'

import { Vector3 } from "three"
import { Canvas } from "@react-three/fiber"

import { useAnimateOnScroll } from "../../functions/transition"
import { trans } from "../../functions/function.types"

import { Sphere } from "./Sphere"
import { canvasState, canvasStyle } from './Canvas.types'

import "./canvas.css"

const Globe = () => {
  // const [isNeverChanged, setIsNeverChanged] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [state] = useState(canvasState)

  // const ref = useRef<HTMLCanvasElement>(null!)

  const position = useMemo( () => new Vector3(
    state.lightPosX,
    state.lightPosY,
    state.lightPosZ
  ), [state.lightPosX, state.lightPosY, state.lightPosZ])

  useAnimateOnScroll(
    '.canvas-globe', 
    {...trans, start: 1000}
  )

  useEffect(() => {
    const onCanvasScroll = () => {
      const isScrollAfterGlobe = window.scrollY > 490

      if(!isScrollAfterGlobe && !isVisible)
        setIsVisible(true)
      else if(isScrollAfterGlobe && isVisible)
        setIsVisible(false)
    }
    
    window.addEventListener("scroll", onCanvasScroll)

    return () => window.removeEventListener("scroll", onCanvasScroll)
  },[isVisible])

  return(
    <React.Fragment>
      {
        // isToggle &&
        <Canvas
          // ref={ref}
          className="canvas-globe"
          style={canvasStyle} 
        >
          <pointLight 
            position={position} 
            intensity={state.lightIntensity}
          />
          <Sphere 
            isVisible={isVisible}
            radius={state.sphereRadius}
            scale={state.sphereScale}
            width={state.sphereWidth}
            height={state.sphereHeight}
            sensibility={state.sphereSensibility}
            lineScale={state.lineScale}
            lineQuantity={state.lineQuantity}
            dashedLineScale={state.dashedLineScale}
          />
        </Canvas>
      }
    </React.Fragment>
  )
}

export {Globe}