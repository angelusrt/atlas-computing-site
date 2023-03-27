import { useEffect } from "react"
import { Vector3 } from "three"
import { Err, Ok, Result } from "ts-results"
import { BlockErrorType } from "../components/blocks/Blocks.types"
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

function setGeometry(prop: GeometryType): Result<"Successfull", BlockErrorType>{
  const {points, ref, rotation, scale} = prop
  const geometry = ref.current

  if(!geometry) return Err("BLOCK_DOESNT_EXIST")

  geometry.computeBoundingSphere()
  geometry.setFromPoints(points) 
  geometry.scale(scale, scale, scale) 
  geometry.rotateY(rotation)

  return Ok("Successfull")
}

function rotateOnMouse(prop: RotationType){
  const {isVisible, ref, sensibility} = prop

  const onMouse = (e: MouseEvent): Result<"Successfull", BlockErrorType> => {
    const line = ref.current 

    if(!line) return Err("BLOCK_DOESNT_EXIST")

    line.rotation.y += e.movementX / sensibility
    
    return Ok("Successfull")
  }

  if(isVisible)
    window.addEventListener('mousemove', onMouse)
  else  
    window.removeEventListener('mousemove', onMouse)
}

function useSetGeometry(prop: GeometryType){
  useEffect(() => {setGeometry(prop)},[])
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