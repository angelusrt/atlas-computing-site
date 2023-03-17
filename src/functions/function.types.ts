import { BufferGeometry, Vector3 } from "three"

type ObsEntry = IntersectionObserverEntry

type HTMLRef = React.MutableRefObject<HTMLDivElement>

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

type GeometryType = {
  ref: React.MutableRefObject<BufferGeometry>,
  points: Vector3[],
  scale: number,
  rotation: number
}

type RotationType = {
  ref: React.MutableRefObject<THREE.LineSegments>,
  isVisible: boolean,
  sensibility: number
}

type AnimationType = {
  ref: React.MutableRefObject<HTMLDivElement>,
  classArray: [string, string],
  time: NodeJS.Timeout | undefined,
  setTime: React.Dispatch<React.SetStateAction<NodeJS.Timeout | undefined>>,
  isToggle: boolean
}

export {trans}
export type {
  ObsEntry,
  HTMLRef,
  TransitionType,
  GeometryType, 
  RotationType,
  AnimationType
}