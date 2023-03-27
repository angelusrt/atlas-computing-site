import React from 'react'
import { useGLTF } from '@react-three/drei'

function Model(prop: {scale: number}) {
  const { nodes, materials } = useGLTF('/lighthouse.gltf') as any

  return (
    <group scale={prop.scale} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[0, 0.81, 0]} scale={[1, 0.8, 1]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Material} position={[0, 2.01, 0]} scale={0.8} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.Material} position={[0, 4.81, 0]} scale={0.8} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Material} position={[1.28, 0.44, -1.78]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5} />
    </group>
  )
}

export {Model}

useGLTF.preload('/lighthouse.gltf')
