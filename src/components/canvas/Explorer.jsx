import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Explorer = ({ isMobile }) => {
  const explorer = useGLTF("./space_explorer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.24}
        penumbra={1}
        intensity={0.75}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={explorer.scene}
        scale={isMobile ? 0.1 : 0.3}
        position={isMobile ? [0, 0.75, -0.4] : [0, 0, 0.5]}
      />
    </mesh>
  )
}

const ExplorerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-width: 500');
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile (event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Explorer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ExplorerCanvas