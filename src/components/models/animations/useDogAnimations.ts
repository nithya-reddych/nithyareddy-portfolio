import { Group } from 'three';
import { MutableRefObject } from 'react';

interface DogRefs {
  group: MutableRefObject<Group | null>;
  tailGroup: MutableRefObject<Group | null>;
  legRefs: MutableRefObject<Group[]>;
}

export function useDogAnimations({ group, tailGroup, legRefs }: DogRefs) {
  return (time: number, action: 'idle' | 'walk' | 'sit' | 'wag') => {
    if (!group.current || !tailGroup.current) return;

    // Reset transformations
    group.current.rotation.x = 0;
    group.current.position.y = 0.3;
    
    // Reset all leg positions and rotations
    legRefs.current.forEach(leg => {
      if (leg) {
        leg.rotation.x = 0;
        leg.position.y = -0.25;
      }
    });

    switch (action) {
      case 'walk': {
        const walkSpeed = 1;
        const walkDistance = 1;
        group.current.position.x = 3 + Math.sin(time * walkSpeed) * walkDistance;

        const legCycle = time * walkSpeed * 2;
        legRefs.current.forEach((leg, index) => {
          if (!leg) return;
          const offset = index % 2 ? 0 : Math.PI;
          const frontBack = index < 2 ? 1 : -1;
          leg.rotation.x = Math.sin(legCycle + offset) * 0.2 * frontBack;
        });

        group.current.rotation.z = Math.sin(legCycle) * 0.03;
        group.current.position.y = 0.3 + Math.abs(Math.sin(legCycle)) * 0.02;
        group.current.rotation.y = Math.PI / 4 + Math.cos(time * walkSpeed) * 0.1;
        tailGroup.current.rotation.y = Math.sin(time * 6) * 0.2;
        break;
      }

      case 'sit': {
        // Tilt the body backward slightly
        group.current.rotation.x = 0;
        // Lower the body for sitting
        group.current.position.y = 0.2;
        
        // Front legs straight but slightly angled
        legRefs.current.slice(0, 2).forEach(leg => {
          if (leg) {
            leg.rotation.x = 0.2; // Slight forward angle
            leg.position.y = 0; // Keep at normal height
          }
        });
        
        // Back legs folded under
        legRefs.current.slice(2).forEach(leg => {
          if (leg) {
            leg.rotation.x = 1.2; // Fold backwards
            leg.position.y = -0.1; // Raise slightly to match sitting position
          }
        });
        
        // Gentle tail wag while sitting
        tailGroup.current.rotation.y = Math.sin(time * 2) * 0.1;
        break;
      }

      case 'wag': {
        tailGroup.current.rotation.y = Math.sin(time * 12) * 0.5;
        group.current.rotation.y = Math.PI / 4 + Math.sin(time * 2) * 0.1;
        break;
      }

      case 'idle': {
        group.current.position.y = 0.3;
        group.current.scale.y = 1 + Math.sin(time * 0.5) * 0.01;
        group.current.rotation.z = Math.sin(time * 0.2) * 0.02;
        group.current.rotation.y = Math.PI / 4 + Math.sin(time * 0.3) * 0.05;
        tailGroup.current.rotation.y = Math.sin(time) * 0.05;
        break;
      }
    }
  };
}