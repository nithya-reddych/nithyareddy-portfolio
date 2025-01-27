import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useCamera } from '../../hooks/useCamera';
import { Vector3 } from 'three';

interface CameraControllerProps {
  activeSection: string | null;
}

export function CameraController({ activeSection }: CameraControllerProps) {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  useCamera(activeSection, controlsRef);

  useEffect(() => {
    if (!controlsRef.current) return;
    
    const controls = controlsRef.current;
    
    // Set initial position and target
    camera.position.set(100, 4, 100);
    camera.lookAt(new Vector3(0, 1, 0));
    controls.target.set(0, 1, 0);
    controls.update();

    // Smooth controls configuration
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      maxPolarAngle={Math.PI / 2}
      minDistance={4}
      maxDistance={12}
      enableZoom={!activeSection}
      enableRotate={!activeSection}
      enablePan={false}
    />
  );
}