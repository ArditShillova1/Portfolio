import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Shadow, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
const Computers = ({isMobile}) => {
  const computer = useGLTF('../desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={3}
      groundColor="black"/>
      <pointLight intensity={3}/>
      <spotLight
        position={[10, 10, 70]}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.0007 :0.001}
        position={isMobile ? [0, -4.5 , -0.5] : [0, -3.7, -5.7]}
        rotation={[-0.01, 0.7, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1000px)');


      setIsMobile(mediaQuery.matches);

      const handelMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change', handelMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handelMediaQueryChange);
      }

    })

    return (
      <Canvas
        frameloop='demand'
        shadows
        camera={{position: [20, 3, 2], fov: 30 }}
        gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback = {<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />

        </Suspense>

      
        <Preload all />
      </Canvas>
    )


}
export default  ComputersCanvas ;  