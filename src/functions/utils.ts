import { useEffect } from "react"
import { Vector3 } from "three"
import { ClassAnimation, LineRotation, RefGeometry } from "./function.types"

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

function setGeometry(props: RefGeometry){
  const current = props.ref.current

  if(current != null){
    current.computeBoundingSphere()
    current.setFromPoints(props.points) 
    current.scale(props.scale, props.scale, props.scale) 
    current.rotateY(props.rotation)
  }
}

function rotateWhenMouseMove(prop: LineRotation){
  const onMouseMove = (e: MouseEvent) => {
    const current = prop.ref.current 

    if(current !== null)
      current.rotation.y += e.movementX/prop.sensibility
  }

  if(prop.isVisible)
    window.addEventListener('mousemove', onMouseMove)
  else  
    window.removeEventListener('mousemove', onMouseMove)
}

function animateWithClass(prop: ClassAnimation){
  const classList = prop.ref.current.classList
  const removeClass = (i: number) => classList.remove(prop.classArray[i]) 
  const addClass = (i: number) => classList.add(prop.classArray[i])

  if(prop.time !== undefined) clearTimeout(prop.time)

  if(!prop.isToggle){
    removeClass(0)
    prop.setTime(setTimeout(() => addClass(1), 1000))
  } else if(prop.isToggle){
    removeClass(1)
    prop.setTime(setTimeout(() => addClass(0), 10))
  }
}

function useSetGeometry(prop: RefGeometry){
  useEffect(() => 
    //eslint-disable-next-line
    setGeometry(prop),[]
  )
}
function useRotateWhenMouseMove(prop: LineRotation){
  useEffect(() => 
    rotateWhenMouseMove(prop),[prop.sensibility, prop.isVisible, prop]
  )
}
function useAnimateWithClass(prop: ClassAnimation){
  //eslint-disable-next-line
  useEffect(() => animateWithClass({...prop}),[prop.isToggle])
}

function animateQuery(query: string): string {
  const queryArray = query.split(" ")
  const lastQuery = queryArray[queryArray.length - 1]
  const className = lastQuery.substring(1)
  
  return className + '--show'
}

export{
  createPointsOfCircle, 
  rotateWhenMouseMove, 
  setGeometry, 
  animateWithClass,
  useSetGeometry,
  useRotateWhenMouseMove,
  useAnimateWithClass,
  animateQuery
}