import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Preload } from '@react-three/drei';
import { Room } from './Room';
import { Suspense } from 'react';
import { useStore } from '../store/useStore';
import { CameraController } from './camera/CameraController';

export function Scene() {
  const { activeSection } = useStore();

  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[100, 4, 100]} />
      <CameraController activeSection={activeSection} />
      
      <ambientLight intensity={1} /> {/* Increased from 0.3 */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <Suspense fallback={null}>
        <Room />
      </Suspense>
    </Canvas>
  );
}