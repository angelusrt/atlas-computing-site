type ObsEntry = IntersectionObserverEntry

type HTMLRef = React.MutableRefObject<HTMLElement>
type DivRef = React.MutableRefObject<HTMLDivElement>
type ButtonRef = React.MutableRefObject<HTMLButtonElement>
type SVGRef = React.MutableRefObject<SVGSVGElement> 

type BlockErrorType = "BLOCK_DOESNT_EXIST"

const bodyStyle = [
  'overflow: auto; height: auto;',
  'overflow: hidden; height: 100%;' 
]

type TransitionType = {
  isTransition: boolean,
  timeout: number,
  delayPerItem: number,
  isDelayChild: boolean,
  start: number,
  index: number
}

const trans: TransitionType = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 0,
  timeout: 200,
  start: 0,
  index: 0,
}

type RotationType = {
  ref: React.MutableRefObject<THREE.LineSegments>,
  isVisible: boolean,
  isMobile: boolean,
  sensibility: number
}

type StyleType = {
  pad: string[], 
  endPad: string[], 
  padAux: number[], 
  radius: string[],
}

type KeyframeType = {
  parent: HTMLElement | null,
  keyAmount: number,
  pad: string[],
  endPad: string[],
  padAux: number[],
  radius: string[],
  block: HTMLElement
  isEnter: boolean
}

type OptionsType = {
  text: string,
  name: string
}[]

export {trans, bodyStyle}
export type {
  ObsEntry,
  HTMLRef,
  DivRef,
  ButtonRef,
  SVGRef,
  TransitionType,
  RotationType,
  KeyframeType,
  StyleType,
  OptionsType,
  BlockErrorType
}