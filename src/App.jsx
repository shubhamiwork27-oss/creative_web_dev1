import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF,Bounds, Center, Environment } from '@react-three/drei'

function IronManModel() {
  const { scene } = useGLTF('/iron_man.glb')
  
  return <primitive object={scene} rotation={[0, Math.PI / 2, 0]} />
}


const App = () => {
  return (
    <div className="parent">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2.4} />
        <directionalLight position={[-5, -8, -5]} intensity={4} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <IronManModel />
            </Center>
          </Bounds>
        </Suspense>
        <Environment preset="city" />
        <OrbitControls enableZoom autoRotate autoRotateSpeed={5} />
        
      </Canvas>
    <div className="bg"></div>

    </div>
  )
}

export default App