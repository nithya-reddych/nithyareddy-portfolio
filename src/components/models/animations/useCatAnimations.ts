import { Group } from 'three';
import { MutableRefObject } from 'react';

interface CatRefs {
  group: MutableRefObject<Group | null>;
  tailGroup: MutableRefObject<Group | null>;
  legRefs: MutableRefObject<Group[]>;
}

export function useCatAnimations({ group, tailGroup, legRefs }: CatRefs) {
  return (time: number, action: 'idle' | 'walk' | 'sit' | 'wag') => {
    if (!group.current || !tailGroup.current) return;

    // Reset transformations
    group.current.rotation.x = 0;
    group.current.position.y = 0.2;
    
    // Reset leg positions
    legRefs.current.forEach(leg => {
      if (leg) {
        leg.rotation.x = 0;
        leg.position.y = -0.2;
      }
    });

    switch (action) {
      case 'walk': {
        const walkSpeed = 3; // Cats walk faster than dogs
        const walkDistance = 1;
        group.current.position.x = -1 + Math.sin(time * walkSpeed) * walkDistance;

        // Smooth walking animation
        const legCycle = time * walkSpeed * 2;
        legRefs.current.forEach((leg, index) => {
          if (!leg) return;
          const offset = index % 2 ? 0 : Math.PI;
          const frontBack = index < 2 ? 1 : -1;
          leg.rotation.x = Math.sin(legCycle + offset) * 0.3 * frontBack;
        });

        // Cat-like body movement
        group.current.rotation.z = Math.sin(legCycle) * 0.05;
        group.current.position.y = 0.2 + Math.abs(Math.sin(legCycle)) * 0.03;
        group.current.rotation.y = Math.PI / 4 + Math.sin(time * walkSpeed) * 0.2;
        tailGroup.current.rotation.z = Math.cos(time * 4) * 0.3;
        break;
      }

      case 'sit': {
        // Typical cat sitting pose
        group.current.rotation.x = -0.2;
        group.current.position.y = 0.15;
        
        // Front legs straight
        legRefs.current.slice(0, 2).forEach(leg => {
          if (leg) {
            leg.rotation.x = 0.1;
            leg.position.y = -0.2;
          }
        });
        
        // Back legs folded
        legRefs.current.slice(2).forEach(leg => {
          if (leg) {
            leg.rotation.x = 1.4;
            leg.position.y = -0.1;
          }
        });
        
        // Gentle tail movement
        tailGroup.current.rotation.z = Math.sin(time) * 0.1;
        break;
      }

      case 'wag': {
        // Cat tail flicking
        tailGroup.current.rotation.z = Math.sin(time * 8) * 0.8;
        group.current.rotation.y = Math.PI / 4 + Math.sin(time) * 0.05;
        break;
      }

      case 'idle': {
        // Subtle breathing movement
        group.current.position.y = 0.2 + Math.sin(time * 0.5) * 0.005;
        group.current.rotation.z = Math.sin(time * 0.2) * 0.01;
        group.current.rotation.y = Math.PI / 4 + Math.sin(time * 0.3) * 0.02;
        // Gentle tail movement
        tailGroup.current.rotation.z = Math.sin(time * 0.8) * 0.1;
        break;
      }
    }
  };
}