import { Vector3 } from "three"
import { Err, Ok, Result } from "ts-results"
import { BlockErrorType } from "../components/blocks/Blocks.types"
import { RotationType } from "./function.types"

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

function rotateOnMouse(prop: RotationType){
  const {isVisible, isMobile, ref, sensibility} = prop

  const onMouse = (e: MouseEvent): Result<"Successfull", BlockErrorType> => {
    const line = ref.current 

    if(!line) return Err("BLOCK_DOESNT_EXIST")

    line.rotation.y += e.movementX / sensibility
    
    return Ok("Successfull")
  }

  if(isVisible && !isMobile)
    window.addEventListener('mousemove', onMouse)
  else if(!isVisible && !isMobile)
    window.removeEventListener('mousemove', onMouse)
}

export{getCirclePoints, rotateOnMouse}