import { Box, Cylinder, Html } from '@react-three/drei';
import { useStore } from '../../../store/useStore';
import { SkillsContent } from './skills/SkillsContent';
import { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';



export function CoffeeTable() {
  // const { activeSection } = useStore();
  // const [showSkills, setShowSkills] = useState(false);
  const table = useGLTF('/models/coffee_table2.glb');


  // useEffect(() => {
  //   if (activeSection === 'skills') {
  //     // Wait for the camera animation to finish and then show the skills content
  //     setTimeout(() => {
  //       setShowSkills(true); // Show skills content after camera zoom
  //     }, 2000); // Wait for 2 seconds after the camera finishes moving
  //   } else {
  //     setShowSkills(false); // Hide when skills section is not active
  //   }
  // }, [activeSection]);

  return (
    <group position={[0, 0, -1.15]}>
      {/* <Box args={[2.2, 0.05, 1.2]} position={[0, 0.45, 0]}>
        <meshStandardMaterial color="#ffedf3" opacity={0.3} transparent />
      </Box> */}

      <group position={[0, 0.15, 0]} scale={[0.015,0.015,0.015]}>
        <primitive object={table.scene} />
      </group>

    
      

     

      {/* Skills content: Show on box and zoom in */}
      {/* {showSkills && (
        <Html
          transform
          position={[0, 0.5, 0]} // Position on top of the box
          rotation={[Math.PI / 2, 0, 0]} // Make it face the camera
          scale={[-1, 1, 1]} // Increase size for better visibility
          style={{
            width: '35vw',  // Occupy a larger portion of the screen
            height: '40vh', // Occupy a larger portion of the screen
            transformStyle: 'preserve-3d',
            
          }}
          distanceFactor={1.5} // Keep content sharp and in focus
        >
          <SkillsContent />
        </Html>
      )} */}

      
    </group>
  );
}
