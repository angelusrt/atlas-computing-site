import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group, DoubleSide, Color} from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Lighthouse = (prop: {isMobile: boolean}) => {
  const {isMobile} = prop

  const ref = useRef<Group>(null!) 

  const gltf = useLoader(GLTFLoader, 'lighthouse.gltf')
 
  const size = isMobile ? 10 : 20

  useFrame(() => ref.current.rotation.y += 0.002)
  
  useEffect(() => {
    ref.current.translateY(isMobile ? -5 : -4.5)
  },[])

  return (
    <group 
      ref={ref} 
      position={[0, 0, -2.5]} 
      rotation={[0, 2.5, 0]}
    >
      <primitive 
        object={gltf.scene} 
        scale={isMobile ? 1.25 : 1.5} 
      />
      <mesh rotation={[-0.5 * Math.PI, 0, 0]}>
        <planeGeometry 
          args={[size, size, 1, 1]}
        />
        <meshBasicMaterial 
          color={new Color(0x000000)} 
          side={DoubleSide}
        />
      </mesh>
    </group>
  )
}

export {Lighthouse}