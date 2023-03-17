import { useEffect } from "react"
import { Vector3 } from "three"
import { GeometryType, RotationType } from "./function.types"

const z = 0
const circumference = 2 * Math.PI

function getCirclePoints(subdivisions: number, radius: number): Vector3[]{
  const points: Vector3[] = []
  const step =  circumference / subdivisions

  for (let i = 0; i < subdivisions + 1; i++) {
    const x = radius * Math.cos(step * i)
    const y = radius * Math.sin(step * i)

    points.push(new Vector3(x, y, z))
  }

  return points
}

function setGeometry(prop: GeometryType){
  const {points, ref, rotation, scale} = prop
  const geometry = ref.current

  if(geometry != null){
    geometry.computeBoundingSphere()
    geometry.setFromPoints(points) 
    geometry.scale(scale, scale, scale) 
    geometry.rotateY(rotation)
  }
}

function rotateOnMouse(prop: RotationType){
  const {isVisible, ref, sensibility} = prop

  const onMouse = (e: MouseEvent) => {
    const line = ref.current 

    if(line) line.rotation.y += e.movementX / sensibility
  }

  if(isVisible)
    window.addEventListener('mousemove', onMouse)
  else  
    window.removeEventListener('mousemove', onMouse)
}

function useSetGeometry(prop: GeometryType){
  useEffect(() => 
    //eslint-disable-next-line
    setGeometry(prop),[]
  )
}

function useRotateOnMouse(prop: RotationType){
  useEffect(() => 
    rotateOnMouse(prop),[prop.sensibility, prop.isVisible, prop]
  )
}

export{
  getCirclePoints,
  setGeometry,
  useSetGeometry,
  useRotateOnMouse
}