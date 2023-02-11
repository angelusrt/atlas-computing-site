import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import React, {useState } from 'react'
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

  const position = new THREE.Vector3(
    state.lightPosX,
    state.lightPosY,
    state.lightPosZ
  )

  useAnimateOnScroll(
    '.canvas-globe', 
    {...transition, start: 2000}
  )

  return(
    <React.Fragment>
      <Canvas 
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
    </React.Fragment>
  )
}

export {Globe}