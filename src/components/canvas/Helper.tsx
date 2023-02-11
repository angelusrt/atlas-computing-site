import React from "react"
import DatGui, { DatBoolean, DatNumber } from "react-dat-gui"

type stateType = {
  lightIntensity: number,
  lightPosX: number,
  lightPosY: number,
  lightPosZ: number,
  sphereScale: number,
  sphereRadius: number,
  sphereWidth: number,
  sphereHeight: number,
  lineScale: number,
  dashedLineScale: number,
  isHelpers: boolean
} 

type guiProps = {
  state: stateType
  setState: (newData: stateType) => void
}

const guiData: [string, number, number, number][] = [
  ['lightIntensity', 0, 10, 0.5],
  ['lightPosX', -100, 100, 0],
  ['lightPosY', -100, 100, 0],
  ['lightPosZ', -100, 100, 0],
  ['sphereScale', 0, 5, 0.5],
  ['sphereRadius', 0, 1, 0.1],
  ['sphereWidth', 0, 100, 0],
  ['sphereHeight', 0, 100, 0],
  ['lineScale', 0, 5, 0.1],
  ['dashedLineScale', 0, 5, 0.01],
]

function GUI(props:guiProps){
  return(
    <DatGui 
      data={props.state} 
      onUpdate={props.setState} 
    >
      {guiData.map((item, index) => 
        <DatNumber 
          key={index}
          path={item[0]}
          min={item[1]} 
          max={item[2]} 
          step={item[3]}
        />
      )}
      <DatBoolean path="isHelpers"/>
    </DatGui>
  )
}

function Helper(){
  return(
    <React.Fragment>
      <axesHelper/>
      <gridHelper/>
    </React.Fragment>
  )
}

export {GUI, Helper}
export type{stateType}