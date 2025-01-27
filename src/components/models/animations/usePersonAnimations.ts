import { MutableRefObject } from 'react';
import { Group } from 'three';
import { gsap } from 'gsap';

export function usePersonAnimations(
  group: MutableRefObject<Group | null>,
  rightArm: MutableRefObject<Group | null>,
  leftArm: MutableRefObject<Group | null>
) {
  const waveTimeline = gsap.timeline({ repeat: 2 });

  const startWaving = () => {
    if (!rightArm.current) return;

    waveTimeline.clear();
    
    // Reset arm position
    rightArm.current.rotation.z = -0.2;
    
    // Create waving animation
    waveTimeline
      .to(rightArm.current.rotation, {
        z: -1.5,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(rightArm.current.rotation, {
        z: -1.2,
        duration: 0.2,
        ease: "power2.inOut"
      })
      .to(rightArm.current.rotation, {
        z: -1.5,
        duration: 0.2,
        ease: "power2.inOut"
      })
      .to(rightArm.current.rotation, {
        z: -0.2,
        duration: 0.4,
        ease: "power2.in"
      });
  };

  const stopWaving = () => {
    waveTimeline.clear();
    if (rightArm.current) {
      gsap.to(rightArm.current.rotation, {
        z: -0.2,
        duration: 0.5
      });
    }
  };

  return {
    startWaving,
    stopWaving
  };
}