import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/iron_man.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
      }
    })
  }, [scene])

  return (
    <primitive
      object={scene}
      scale={0.0010}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI /2 , 0]}
    />
  )
}

export default Model
