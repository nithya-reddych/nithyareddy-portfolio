import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import { Group } from 'three';
import { useStore } from '../../../store/useStore';
import { useCatAnimations } from '../animations/useCatAnimations';

export function Cat() {
  const group = useRef<Group>(null);
  const tailGroup = useRef<Group>(null);
  const legRefs = useRef<Group[]>([]);
  const { characterAction } = useStore();

  const animate = useCatAnimations({ group, tailGroup, legRefs });

  useFrame((state) => {
    animate(state.clock.elapsedTime, characterAction);
  });

  const scale = 0.4; // Smaller than the dog

  return (
    <group ref={group} position={[-1, 0.2, -1]} scale={scale}>
      {/* Body */}
      <Sphere args={[0.4, 32, 16]} position={[0, 0, 0]} scale={[1, 0.8, 1.2]}>
        <meshStandardMaterial color="#808080" />
      </Sphere>

      {/* Head */}
      <Sphere args={[0.25, 32, 16]} position={[0, 0.3, 0.4]}>
        <meshStandardMaterial color="#808080" />
      </Sphere>

      {/* Ears - triangular shape */}
      <Cylinder args={[0.05, 0.05, 0.2, 3]} position={[0.15, 0.5, 0.4]} rotation={[0, 0, 0.3]}>
        <meshStandardMaterial color="#808080" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.2, 3]} position={[-0.15, 0.5, 0.4]} rotation={[0, 0, -0.3]}>
        <meshStandardMaterial color="#808080" />
      </Cylinder>

      {/* Eyes - more almond shaped */}
      <Sphere args={[0.05]} position={[0.1, 0.35, 0.6]} scale={[1, 0.5, 1]}>
        <meshStandardMaterial color="#FFD700" />
      </Sphere>
      <Sphere args={[0.05]} position={[-0.1, 0.35, 0.6]} scale={[1, 0.5, 1]}>
        <meshStandardMaterial color="#FFD700" />
      </Sphere>

      {/* Nose */}
      <Sphere args={[0.02]} position={[0, 0.3, 0.65]}>
        <meshStandardMaterial color="#FFC0CB" />
      </Sphere>

      {/* Legs with refs for animation */}
      {[
        [0.2, -0.2, 0.2],   // Front right
        [-0.2, -0.2, 0.2],  // Front left
        [0.2, -0.2, -0.2],  // Back right
        [-0.2, -0.2, -0.2], // Back left
      ].map((position, index) => (
        <group 
          key={index} 
          position={[position[0], position[1], position[2]]}
          ref={el => { if (el) legRefs.current[index] = el }}
        >
          <Cylinder args={[0.06, 0.06, 0.3]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#808080" />
          </Cylinder>
        </group>
      ))}

      {/* Tail */}
      <group ref={tailGroup} position={[0, 0, -0.6]}>
        <Cylinder 
          args={[0.04, 0.02, 0.5]} 
          position={[0, 0.1, 0]} 
          rotation={[0, 0, Math.PI / 4]}
        >
          <meshStandardMaterial color="#808080" />
        </Cylinder>
      </group>
    </group>
  );
}