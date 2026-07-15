import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Bounds, Center, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import './Ironman.css'

function IronManModel() {
  const { scene } = useGLTF('/iron_man.glb')
  return <primitive object={scene} rotation={[0, Math.PI / 2, 0]} />
}

const Ironman = () => {
  return (
    <div className="parent">
      <div className="bg-glow" />

      <Canvas
        camera={{ position: [0, -0.7,8], fov: 60 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={5} />
        <directionalLight position={[7, 7, 7]} color={'#034aff'} intensity={10.4} />
        <directionalLight position={[-5, -8, -5]} intensity={10} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1}>
            <Center>
              <IronManModel />
            </Center>
          </Bounds>
        </Suspense>
        <Environment preset="forest" />
        <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} />
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.9}
            luminanceSmoothing={6}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default Ironman