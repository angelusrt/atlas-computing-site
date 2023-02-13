import * as THREE from "three"
import { BufferGeometry, Vector3 } from "three"

const z = 0
const circumference = 2 * Math.PI

function createPointsOfCircle(subdivisions: number, radius: number){
  const points: Vector3[] = []
  const step =  circumference/ subdivisions

  for (let i = 0; i < subdivisions + 1; i++) {
    const x = radius * Math.cos(step * i)
    const y = radius * Math.sin(step * i)

    points.push(new Vector3(x, y, z))
  }

  return points
}

type setGeometryProps = {
  ref: React.MutableRefObject<BufferGeometry>,
  points: Vector3[],
  scale: number,
  rotation: number
}

function setGeometry(props: setGeometryProps){
  const current = props.ref.current

  if(current != null){
    current.computeBoundingSphere()
    current.setFromPoints(props.points) 
    current.scale(props.scale, props.scale, props.scale) 
    current.rotateY(props.rotation)
  }
}

function rotateWhenMouseMove(
  ref: React.MutableRefObject<THREE.LineSegments>,
  sensibility: number
){
  window.addEventListener('mousemove', (e) => {
    const current = ref.current 

    if(current !== null)
      current.rotation.y += e.movementX/sensibility
  })
}
type animateWithClassProps = {
  ref: React.MutableRefObject<HTMLDivElement>,
  classArray: [string, string],
  time: NodeJS.Timeout | undefined,
  setTime: React.Dispatch<React.SetStateAction<NodeJS.Timeout | undefined>>,
  isToggle: boolean
}

function animateWithClass(props: animateWithClassProps){
  const classList = props.ref.current.classList
  const removeClass = (i: number) => classList.remove(props.classArray[i]) 
  const addClass = (i: number) => classList.add(props.classArray[i])

  if(props.time !== undefined) clearTimeout(props.time)

  if(!props.isToggle){
    removeClass(0)
    props.setTime(setTimeout(() => addClass(1), 1000))
  } else if(props.isToggle){
    removeClass(1)
    props.setTime(setTimeout(() => addClass(0), 10))
  }
}

export{createPointsOfCircle, rotateWhenMouseMove, setGeometry, animateWithClass}
export type {animateWithClassProps}