type CanvasState = {
  lightIntensity: number,
  lightPosX: number,
  lightPosY: number,
  lightPosZ: number,
  sphereScale: number,
  sphereRadius: number,
  sphereWidth: number,
  sphereHeight: number,
  sphereSensibility: number,
  lineQuantity: number,
  lineScale: number,
  dashedLineScale: number,
  isHelpers: boolean,
} 

const canvasState: CanvasState = {
  lightIntensity: 8,
  lightPosX: -50,
  lightPosY: 60,
  lightPosZ: 100,
  sphereScale: 2.5,
  sphereRadius: 1,
  sphereWidth: 100,
  sphereHeight: 100,
  sphereSensibility: 1500,
  lineScale: 2.9,
  lineQuantity: 8,
  dashedLineScale: 2.51,
  isHelpers: false,
}

const canvasStyle: React.CSSProperties = {
  position: 'absolute', 
  height: '400px', 
  width: '400px'
}

interface iGUI{
  state: CanvasState
  setState: (newData: CanvasState) => void
}

type GUIData = [string, number, number, number][]

const guiData: GUIData = [
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

interface iLine {
  width: number, 
  radius: number,
  scale: number
}

interface iDashedLine extends iLine {
  isVisible: boolean,
  sensibility: number,
  rotation: number
}
interface iSphereLine extends iLine {
  isVisible: boolean,
  sensibility: number,
  lineQuantity: number
}

interface iSphere extends iSphereLine {
  height: number
  lineScale: number,
  dashedLineScale: number
}

export {canvasStyle, canvasState, guiData}
export type{CanvasState, iGUI, iLine, iDashedLine, iSphereLine, iSphere}