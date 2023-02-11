import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { BufferGeometry } from "three"
import { 
  createPointsOfCircle, 
  rotateWhenMouseMove, 
  setGeometry 
} from "../../functions/utils"

type lineProps = {
  width: number, 
  radius: number,
  scale: number
}

function Line(props: lineProps){
  const ref = useRef<BufferGeometry>(null!)

  const {scale, radius, width} = props
  const points = createPointsOfCircle(width, radius)
  const geometryObj = {ref, points, scale, rotation: 0}

  useEffect(() => 
    setGeometry(geometryObj),[ref, points, scale]
  )

  return(
    <line>
      <bufferGeometry ref={ref}/>
      <lineBasicMaterial
        color="#000000"
        linewidth={3}
      />
    </line>
  )
}

type dashedLineProps = {
  sensibility: number,
  width: number, 
  radius: number,
  scale: number,
  rotation: number
}

function DashedLine(props: dashedLineProps){
  const {scale, rotation, radius, width, sensibility} = props
  const points = createPointsOfCircle(width, radius)
  
  const lineRef = useRef<THREE.LineSegments>(null!)
  const geometryRef = useRef<BufferGeometry>(null!)
  
  const geometryObj = {ref: geometryRef, points, scale, rotation}
  
  useFrame(() => lineRef.current.rotation.y += 0.005 )
  useEffect(() => rotateWhenMouseMove(lineRef, sensibility),[sensibility])
  useEffect(() => 
    setGeometry(geometryObj),[rotation, scale, points]
  )

  return(
    <lineSegments ref={lineRef}>
      <bufferGeometry ref={geometryRef}/>
      <lineDashedMaterial
        color="#000000"
        linewidth={3}
        dashSize={3}
        gapSize={3}
        scale={2}
      />
    </lineSegments>
  )
}

export {Line, DashedLine}
export type{lineProps}