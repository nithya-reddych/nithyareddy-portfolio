import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import { Group } from 'three';
import { useStore } from '../../../store/useStore';
import { useDogAnimations } from '../animations/useDogAnimations';

export function Dog() {
  const group = useRef<Group>(null);
  const tailGroup = useRef<Group>(null);
  const legRefs = useRef<Group[]>([]);
  const { characterAction } = useStore();

  const animate = useDogAnimations({ group, tailGroup, legRefs });

  useFrame((state) => {
    animate(state.clock.elapsedTime, characterAction);
  });

  const scale = 0.5; // Slightly smaller

  return (
    <group ref={group} position={[2, 0.5, -2]} rotation={[0, 0, 0]} scale={scale}>
      {/* Body */}
      <Sphere args={[0.4, 32, 16]} position={[0, 0.2, 0]} scale={[1, 0.6, 1.5]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>

      {/* Neck */}
      <Cylinder args={[0.2, 0.3, 0.4, 32]} position={[0, 0.4, 0.5]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Cylinder>

      {/* Head */}
      <Sphere args={[0.25, 32, 16]} position={[0, 0.6, 0.7]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>

      {/* Snout */}
      <Sphere args={[0.15, 32, 16]} position={[0, 0.55, 0.9]} scale={[1, 0.7, 1]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>

      {/* Nose */}
      <Sphere args={[0.06]} position={[0, 0.55, 1.05]}>
        <meshStandardMaterial color="#000" />
      </Sphere>

      {/* Eyes */}
      <Sphere args={[0.06]} position={[0.12, 0.65, 0.85]}>
        <meshStandardMaterial color="#000" />
      </Sphere>
      <Sphere args={[0.06]} position={[-0.12, 0.65, 0.85]}>
        <meshStandardMaterial color="#000" />
      </Sphere>

      {/* Ears */}
      <Sphere args={[0.12, 32, 16]} position={[0.2, 0.8, 0.7]} scale={[0.5, 1, 0.3]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      <Sphere args={[0.12, 32, 16]} position={[-0.2, 0.8, 0.7]} scale={[0.5, 1, 0.3]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>

      {/* Legs with refs for animation */}
      {[
        [0.15, 2, 0.4],   // Front right
        [-0.15, 2, 0.4],  // Front left
        [0.15, 2, -0.4],  // Back right
        [-0.15, 2, -0.4], // Back left
      ].map((position, index) => (
        <group 
          key={index} 
          position={[position[0], position[1], position[2]]}
          ref={el => { if (el) legRefs.current[index] = el }}
        >
          <Cylinder args={[0.08, 0.08, 0.6, 32]}>
            <meshStandardMaterial color="#ffffff" />
          </Cylinder>
        </group>
      ))}

      {/* Tail */}
      <group ref={tailGroup} position={[-0.1, 0, -0.7]}>
        <Cylinder args={[0.01, 0.04, 0.5, 32]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Cylinder>
      </group>
    </group>
  );
}