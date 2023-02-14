import { BufferGeometry, Vector3 } from "three"

interface Transition {
  isTransition: boolean,
  timeout: number,
  delayPerItem: number,
  isDelayChild: boolean,
  start: number,
  index: number
}

interface ElTransition extends Transition{
  el: Element
}

interface EntryTransition extends Transition{
  entry: IntersectionObserverEntry
}

const trans: Transition = {
  isTransition: true,
  isDelayChild: false,
  delayPerItem: 0,
  timeout: 200,
  start: 0,
  index: 0,
}

interface RefGeometry {
  ref: React.MutableRefObject<BufferGeometry>,
  points: Vector3[],
  scale: number,
  rotation: number
}

interface LineRotation {
  isVisible: boolean,
  ref: React.MutableRefObject<THREE.LineSegments>,
  sensibility: number
}

interface ClassAnimation {
  ref: React.MutableRefObject<HTMLDivElement>,
  classArray: [string, string],
  time: NodeJS.Timeout | undefined,
  setTime: React.Dispatch<React.SetStateAction<NodeJS.Timeout | undefined>>,
  isToggle: boolean
}

export {trans}
export type {
  Transition, 
  EntryTransition, 
  ElTransition, 
  RefGeometry, 
  LineRotation,
  ClassAnimation
}