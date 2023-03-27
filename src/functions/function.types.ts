import { BufferGeometry, Vector3 } from "three"
import { ExpandedType } from "../components/blocks/Blocks.types"

type ObsEntry = IntersectionObserverEntry

type HTMLRef = React.MutableRefObject<HTMLElement>

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
  isExpanded: ExpandedType,
  exitTimeoutTime: number, 
  onEnter: () => void,
  onEnterTimeout: () => void,
  onExit: () => void,
  onExitTimeout: () => void
}

type EnterType = {
  ref: HTMLRef, 
  delayFirst: number,
  delaySecond: number,
  displayActive: number,
  time: NodeJS.Timeout | undefined,
  getIsDisplay: (s: number) => boolean
  setTime: (s: NodeJS.Timeout) => void,
  doNext?: () => void
}

type ExitType = {
  ref: HTMLRef, 
  isLast: boolean,
  delayFirst: number,
  delaySecond: number,
  doNext: () => void, 
}

type RatingType = {
  emoji: number,
  pageActive: number
}

type UserType = {
  rating: RatingType[] | null
}

export {trans}
export type {
  ObsEntry,
  HTMLRef,
  TransitionType,
  GeometryType, 
  EnterType,
  ExitType,
  RotationType,
  RatingType,
  UserType,
  AnimationType
}