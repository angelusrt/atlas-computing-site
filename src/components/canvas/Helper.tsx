import React from "react"
import DatGui, { DatNumber } from "react-dat-gui"
import { guiData, iGUI } from "./Canvas.types"

const GUI = (props: iGUI) => (
  <DatGui 
    data={props.state} 
    onUpdate={props.setState}
    children={ guiData.map(
      (item, index) => 
      <DatNumber 
        key={index}
        path={item[0]}
        min={item[1]} 
        max={item[2]} 
        step={item[3]}
      />
    )} 
  />
)

const Helper = () => (
  <React.Fragment>
    <axesHelper/>
    <gridHelper/>
  </React.Fragment>
)

export {GUI, Helper}