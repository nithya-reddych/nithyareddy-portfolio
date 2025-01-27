import { useThree } from '@react-three/fiber';
import { useEffect, MutableRefObject } from 'react';
import { Vector3 } from 'three';
import gsap from 'gsap';
import { useStore } from '../store/useStore';

const INITIAL_POSITION = {
  position: new Vector3(100, 8, 100),
  target: new Vector3(0, 1, 0)
};

const CAMERA_POSITIONS = {
  about: {
    position: new Vector3(-1, 1.5, -2),
    target: new Vector3(-1, 0.6, 0)
  },
  projects: {
    position: new Vector3(0, 1.8, -2.5),
    target: new Vector3(0, 1.8, -4)
  },
    
  // skills: {
  //   position: new Vector3(0, 0.25, -0.75), // Ultra-close to the table
  //   target: new Vector3(0, -0.75, -0.25)    // Focus on the table center
  // }

  skills: {
    position: new Vector3(-2.5, 2, 3), // Camera positioned in front of the screen
    target: new Vector3(-10, 1, 3) // Camera looking at the center of the screen
  }

  


} as const;

export function useCamera(activeSection: string | null, controlsRef: MutableRefObject<any>) {
  const { camera } = useThree();
  const { setShowContent } = useStore();
  
  useEffect(() => {
    if (!controlsRef.current) return;

    const controls = controlsRef.current;
    const currentPosition = camera.position.clone();
    const currentTarget = controls.target.clone();
    
    const targetConfig = !activeSection ? INITIAL_POSITION : 
      CAMERA_POSITIONS[activeSection as keyof typeof CAMERA_POSITIONS];

    if (!targetConfig) return;

    setShowContent(false); // Initially hide skills content

    // Create a timeline for synchronized animations
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power3.inOut" },
      onComplete: () => {
        if (activeSection) setShowContent(true); // Show skills content after camera finishes moving
      }
    });

    // Animate camera position
    tl.to(camera.position, {
      x: targetConfig.position.x,
      y: targetConfig.position.y,
      z: targetConfig.position.z,
    }, 0);

    // Animate controls target
    tl.to(controls.target, {
      x: targetConfig.target.x,
      y: targetConfig.target.y,
      z: targetConfig.target.z,
      onUpdate: () => controls.update()
    }, 0);

    return () => {
      tl.kill();
    };
  }, [activeSection, camera, controlsRef, setShowContent]);
}