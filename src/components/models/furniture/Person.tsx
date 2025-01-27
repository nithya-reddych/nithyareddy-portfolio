import { useRef, useEffect } from 'react';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import { Group } from 'three';
import { useStore } from '../../../store/useStore';
import { gsap } from 'gsap';

export function Person() {
  const group = useRef<Group>(null);
  const rightUpperArm = useRef<Group>(null);
  const rightLowerArm = useRef<Group>(null);
  const leftUpperArm = useRef<Group>(null);
  const leftLowerArm = useRef<Group>(null);
  const { activeSection } = useStore();

  // Wave animation
  // useEffect(() => {
  //   if (!rightLowerArm.current) return;
  
  //   const waveTimeline = gsap.timeline({ repeat: 2 }); // Repeat the wave 2 times
  
  //   if (activeSection === 'about') {
  //     // Ensure the arm starts straight
  //     rightLowerArm.current.rotation.set(0, 0, 0); // Reset all rotations to neutral
  
  //     // Create wave animation
  //     waveTimeline
  //       .to(rightLowerArm.current.rotation, {
  //         z: -1.2, // Move the arm upward
  //         x: 0.2, // Slight outward tilt
  //         duration: 0.5, // Time to move up
  //         ease: "power2.out",
  //       })
  //       .to(rightLowerArm.current.rotation, {
  //         z: -0.8, // Bring the arm slightly downward
  //         x: 0.1, // Reduce outward tilt
  //         duration: 0.4, // Time to lower slightly
  //         ease: "power2.inOut",
  //       })
  //       .to(rightLowerArm.current.rotation, {
  //         z: -1.2, // Move upward again
  //         x: 0.2, // Slight outward tilt again
  //         duration: 0.4, // Time to go back up
  //         ease: "power2.inOut",
  //       })
  //       .to(rightLowerArm.current.rotation, {
  //         z: 0, // Return to neutral position
  //         x: 0, // Return to neutral outward position
  //         duration: 0.5, // Time to return
  //         ease: "power2.in",
  //       });
  //   } else {
  //     // Reset the arm if not in the "about" section
  //     waveTimeline.clear();
  //     gsap.to(rightLowerArm.current.rotation, {
  //       x: 0, // Neutral outward position
  //       z: 0, // Neutral upward position
  //       duration: 0.5,
  //     });
  //   }
  
  //   return () => {
  //     waveTimeline.kill();
  //   };
  // }, [activeSection]);
  
  

  return (
    <group position={[1, 0.7, 0.5]} rotation ={[0,Math.PI,0]}>
      {/* Torso */}
      <Box args={[0.35, 0.4, 0.4]} position={[0, 0.3, 0.5]} rotation={[0.1, 0, 0]}>
        <meshStandardMaterial color="#e4a0b7" />
      </Box>

      {/* Head and neck */}
      <group position={[0, 0.675, 0.5]}>
        <Cylinder args={[0.1, 0.08, 0.15, 16]} position={[0, -0.15, 0]}>
          <meshStandardMaterial color="#F5D0C5" />
        </Cylinder>
        <Sphere args={[0.17, 32, 30]}>
          <meshStandardMaterial color="#F5D0C5" />
        </Sphere>

        {/* Facial features */}
        <group position={[0, 0, 0.16]}>
          {/* Left eye */}
          <Sphere args={[0.015, 16, 16]} position={[-0.05, -0.01, 0]}>
            <meshStandardMaterial color="#000000" />
          </Sphere>

          {/* Right eye */}
          <Sphere args={[0.015, 16, 16]} position={[0.05, -0.01, 0]}>
            <meshStandardMaterial color="#000000" />
          </Sphere>

          {/* Mouth/Smile */}
          {/* <Cylinder
            args={[0.01, 0.01, 0.1, 16, 1, true]}
            position={[0, -0.05, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1, 1, 0.5]}
          >
            <meshStandardMaterial color="#FF5733" />
          </Cylinder> */}
        </group>

        {/* Enhanced Long Flowing Hair */}
        <group position={[0, 0.05, 0]}>
          {/* Main hair volume */}
          <Sphere args={[0.17, 32, 16]} scale={[1, 0.8, 1]}>
            <meshStandardMaterial color="#4A4A4A" />
          </Sphere>
          
          {/* Long flowing hair back */}
          {/* <Box args={[0.15, 0.75, 0.3]} position={[0, -0.25, -0.075]}>
            <meshStandardMaterial color="#4A4A4A" />
          </Box> */}
          
          {/* Hair layers for volume */}
          <Cylinder 
            args={[0.15, 0.15, 0.5, 32]} 
            position={[0.05, -0.25, -0.15]} 
            rotation={[Math.PI / 6, 0, Math.PI / 26]} // Adjust the rotation values for outward tilt
          >
            <meshStandardMaterial color="#4A4A4A" />
          </Cylinder>

          <Cylinder args={[0.15, 0.15, 0.5, 32]} position={[-0.05, -0.25, -0.15]} rotation={[Math.PI / 6, 0, -Math.PI/26]}>
          <meshStandardMaterial color="#4A4A4A" />
          </Cylinder>
          {/* <Box args={[0.110, 0.5, 0.3]} position={[0.115, -0.245, -0.075]}>
            <meshStandardMaterial color="#4A4A4A" />
          </Box> */}
          {/* <Box args={[0.110, 0.5, 0.3]} position={[-0.115, -0.245, -0.075]} >
            <meshStandardMaterial color="#4A4A4A" />
          </Box> */}
        </group>
      </group>

      {/* Right Arm */}
      <group position={[0.3, 0.5, 0.5]}>
        {/* Upper Arm */}
        <group ref={rightUpperArm}>
          <Box args={[0.1, 0.15, 0.15]} position={[-0.065, -0.1, 0]} rotation={[0, 0, 0.3]}>
            <meshStandardMaterial color="#e4a0b7" />
          </Box>
          <group ref={rightLowerArm} position={[0, -0.28, 0]}>
          <Box args={[0.1, 0.3, 0.12]} position={[-0.001, -0.03, 0]} rotation={[0, 0,0.3]}>
            <meshStandardMaterial color="#f5d0c5" />
            {/* <Box args={[0.1, 0.1, 0.12]} position={[0.003, -0.165, 0]} rotation={[0, 0, 0]}>
              <meshStandardMaterial color="#000000" />
            </Box> */}
          </Box>
          </group>    
        </group>
      </group>

      {/* Left Arm */}
      <group position={[-0.3, 0.5, 0.5]}>
        {/* Upper Arm */}
        <group ref={leftUpperArm}>
          <Box args={[0.1, 0.15, 0.15]} position={[0.065, -0.1, 0]} rotation={[0, 0, -0.3]}>
            <meshStandardMaterial color="#e4a0b7" />
          </Box>
          {/* Lower Arm  color="#F5D0C5"*/}
          <group ref={leftLowerArm} position={[0, -0.385, 0]}>
            <Box args={[0.1, 0.3, 0.12]} position={[0.001, 0.075, 0]} rotation={[0, 0, -0.3]}>
              <meshStandardMaterial color="#F5D0C5" />
            </Box>
          </group>
        </group>
      </group>

      {/* Legs */}
      <group position={[0, -0.1, 0.7]}>
        <Box args={[0.15, 0.4, 0.7]} position={[0.15, 0, 0]}>
          <meshStandardMaterial color="#f7f7f7" />
        </Box>
        <Box args={[0.15, 0.4, 0.7]} position={[-0.15, 0, 0]}>
          <meshStandardMaterial color="#f7f7f7" />
        </Box>
        <Box args={[0.05, 0.4, 0.15]} position={[0.15, -0.2, 0.2]}>
          <meshStandardMaterial color="#4d4d4d" />
        </Box>
        <Box args={[0.05, 0.4, 0.15]} position={[-0.15, -0.2, 0.2]}>
          <meshStandardMaterial color="#4d4d4d" />
        </Box>
      </group>

      {/* Feet */}
      <Box args={[0.1, 0.1, 0.25]} position={[0.15, -0.45, 0.95]}>
        <meshStandardMaterial color="#fbede0" />
      </Box>
      <Box args={[0.1, 0.1, 0.25]} position={[-0.15, -0.45, 0.95]}>
        <meshStandardMaterial color="#fbede0" />
      </Box>

      {/* shoe border */}
      <Box args={[0.1, -0.025, 0.25]} position={[0.15, -0.5, 0.95]}>
        <meshStandardMaterial color="#de0a26" />
      </Box>
      <Box args={[0.1, -0.025, 0.25]} position={[-0.15, -0.5, 0.95]}>
        <meshStandardMaterial color="#de0a26" />
      </Box>

    </group>
  );
}


// import { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { Group } from 'three';
// import { useStore } from '../../../store/useStore';

// export function Person() {
//   const group = useRef<Group>(null);
//   const { activeSection } = useStore();

//   // Load the GLB model from the public directory
//   const { scene } = useGLTF('/models/person2.glb');

//   return (
//     <group ref={group} position={[0.5, 0.15, 0.25]} scale={[3, 3, 3]} rotation={[0, -Math.PI, 0]}>
//       {/* Increase the size of the model by applying scale */}
//       <primitive object={scene} />
//     </group>
//   );
// }
