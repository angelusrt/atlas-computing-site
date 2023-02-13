import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import React, {useEffect, useRef, useState } from 'react'
import { Helper, stateType } from "./Helper"
import { Sphere } from "./Sphere"
import "./canvas.css"
import { transition, useAnimateOnScroll } from "../../functions/transition"

const canvasStyle: React.CSSProperties = {
  position: 'absolute', 
  height: '400px', 
  width: '400px'
}

function Globe(){
  const [isNeverChanged, setIsNeverChanged] = useState(true)
  const [isToggle, setIsToggle] = useState(true)
  const [state] = useState<stateType>({
    lightIntensity: 8,
    lightPosX: -50,
    lightPosY: 60,
    lightPosZ: 100,
    sphereScale: 2.5,
    sphereRadius: 1,
    sphereWidth: 100,
    sphereHeight: 100,
    lineScale: 2.9,
    dashedLineScale: 2.51,
    isHelpers: false
  })

  const ref = useRef<HTMLCanvasElement>(null!)

  const position = new THREE.Vector3(
    state.lightPosX,
    state.lightPosY,
    state.lightPosZ
  )

  useAnimateOnScroll(
    '.canvas-globe', 
    {...transition, start: 2000},
    {...transition, start: 200},
    isToggle,
    isNeverChanged
  )

  useEffect(() => {
    const onScroll = () => {
      const isScrollAfterGlobe = window.scrollY > 490
      
      if(!isScrollAfterGlobe)
        setIsToggle(true)
      else {
        setIsToggle(false)
        setIsNeverChanged(false)
      }
    }
    
    window.addEventListener("scroll", onScroll)

    // return window.removeEventListener("scroll", onScroll)
  },[])

  return(
    <React.Fragment>
      {
        isToggle &&
        <Canvas
          ref={ref}
          className="canvas-globe"
          style={canvasStyle} 
        >
          <pointLight 
            position={position} 
            intensity={state.lightIntensity}
          />
          {
            state.isHelpers &&
            <Helper/>
          }
          <Sphere 
            radius={state.sphereRadius}
            sphereScale={state.sphereScale}
            width={state.sphereWidth}
            height={state.sphereHeight}
            lineScale={state.lineScale}
            dashedLineScale={state.dashedLineScale}
          />
        </Canvas>
      }
    </React.Fragment>
  )
}

export {Globe}