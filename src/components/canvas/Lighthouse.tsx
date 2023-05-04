import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber/"
import { Suspense, useEffect, useRef } from "react"

import { DoubleSide } from "three/src/constants"
import { Group } from "three/src/objects/Group"
import { Color } from 'three/src/math/Color'

const Lighthouse = (prop: {isMobile: boolean}) => {
  const {isMobile} = prop

  const { nodes, materials } = useGLTF('/lighthouse.gltf') as any
  const { Cube, Cylinder, Cylinder001, Cube001} = nodes
  const { Material } = materials
  
  const ref = useRef<Group>(null!) 
  
  const size = isMobile ? 10 : 20

  useFrame(() => ref.current.rotation.y += 0.002)
  useEffect(() => {
    ref.current.translateY(isMobile ? -5 : -4.5)
  },[isMobile])

  return (
    <Suspense>
      <group ref={ref} position={[0, 0, -2.5]} rotation={[0, 2.5, 0]}>
        <group scale={isMobile ? 1.25 : 1.5} dispose={null}>
          <mesh 
            geometry={Cube.geometry} 
            material={Material} 
            position={[0, 0.81, 0]} 
            scale={[1, 0.8, 1]}
          />
          <mesh 
            geometry={Cylinder.geometry} 
            material={Material} 
            position={[0, 2.01, 0]} 
            scale={0.8} 
          />
          <mesh 
            geometry={Cylinder001.geometry} 
            material={Material} 
            position={[0, 4.81, 0]} 
            scale={0.8} 
          />
          <mesh 
            geometry={Cube001.geometry} 
            material={Material} 
            position={[1.28, 0.44, -1.78]} 
            rotation={[-Math.PI / 2, 0, 0]} 
            scale={0.5} 
          />
        </group>
        <mesh rotation={[-0.5 * Math.PI, 0, 0]}>
          <planeGeometry args={[size, size, 1, 1]}/>
          <meshBasicMaterial color={new Color(0x000000)} side={DoubleSide}/>
        </mesh>
      </group>
    </Suspense>
  )
}

useGLTF.preload('/lighthouse.gltf')

export default Lighthouse