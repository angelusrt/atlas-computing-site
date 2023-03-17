import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Lighthouse = () => {
  const ref = useRef<THREE.Object3D>(null!) 
  const gltf = useLoader(GLTFLoader, 'lighthouse.gltf')
 
  // useFrame(() => ref.current.rotation.y += 0.005)

  return <primitive ref={ref} object={gltf.scene} scale={0.5}/>
}

export {Lighthouse}