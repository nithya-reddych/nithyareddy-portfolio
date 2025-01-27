// import { Box, Sphere, Cylinder } from '@react-three/drei';

// export function Decorations() {
//   return (
//     <group>
//       {/* Large Plant */}
//       <group position={[-4, 0, -4.5]}>
//         <Cylinder args={[0.4, 0.3, 0.8]} position={[0, 0.4, 0.5]}>
//           <meshStandardMaterial color="#f7f7f7" />
//         </Cylinder>
//         <Sphere args={[0.6, 32, 16]} position={[0, 1.2, 0.5]}>
//           <meshStandardMaterial color="#228B22" />
//         </Sphere>
//         {/* <Sphere args={[0.5, 32, 16]} position={[0.3, 1.4, 0.3]}>
//           <meshStandardMaterial color="#228B22" />
//         </Sphere> */}
//       </group>

//       {/* Small Plants */}
//       <group position={[-2.5, 0, -4.5]}>
//         <Cylinder args={[0.25, 0.2, 0.5]} position={[0, 0.25, 0]}>
//           <meshStandardMaterial color="#e6d1f2" />
//         </Cylinder>
//         <Sphere args={[0.3, 32, 16]} position={[0, 0.6, 0]}>
//           <meshStandardMaterial color="#228B22" />
//         </Sphere>
//       </group>

//       {/* Photo Wall */}
//       <Box args={[1, 1.2, 0.05]} position={[-3, 2.5, -4.5]} rotation={[0, 0, -0.1]}>
//         <meshStandardMaterial color="#e0eed5" />
//       </Box>
//       <Box args={[0.8, 1, 0.05]} position={[-4, 2.7, -4.5]} rotation={[0, 0, 0.1]}>
//         <meshStandardMaterial color="#f2cce3" />
//       </Box>
//       <Box args={[0.6, 0.8, 0.05]} position={[-3.5, 3.2, -4.45]}>
//         <meshStandardMaterial color="#fce9b2" />
//       </Box>

//       {/* Wall Shelves */}
//       <Box args={[2, 0.1, 0.3]} position={[3, 2, -4.9]}>
//         <meshStandardMaterial color="#d291bc" />
//       </Box>
//       {/* <Box args={[1.5, 0.1, 0.3]} position={[2, 2.5, -4.9]}>
//         <meshStandardMaterial color="#fec8d8" />
//       </Box> */}
      
//       {/* Decorative Objects on Shelves */}
//       <Sphere args={[0.15]} position={[2.25, 2.15, -4.8]}>
//         <meshStandardMaterial color="#f6edda" />
//       </Sphere>
//       <Cylinder args={[0.1, 0.1, 0.3]} position={[2.65, 2.15, -4.8]}>
//         <meshStandardMaterial color="#f2d9e0" />
//       </Cylinder>
//       <Box args={[0.2, 0.2, 0.2]} position={[3, 2.15, -4.8]} rotation={[0, 0.5, 0]}>
//         <meshStandardMaterial color="#ffbe88" />
//       </Box>
//       <Sphere args={[0.15]} position={[3.35, 2.15, -4.8]}>
//         <meshStandardMaterial color="#ffcacc" />
//       </Sphere>
//       <Box args={[0.2, 0.2, 0.2]} position={[3.7, 2.15, -4.8]} rotation={[0, 0.5, 0]}>
//         <meshStandardMaterial color="#cdb3d4" />
//       </Box>
//     </group>
//   );
// }

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { Box, Cylinder, Html } from '@react-three/drei';
import { SkillsContent } from './skills/SkillsContent';
import { useEffect, useState } from 'react';
import { useStore } from '../../../store/useStore';
import { rotate } from 'three/tsl';

export function Decorations() {
  const { activeSection } = useStore();
  const [showSkills, setShowSkills] = useState(false);

  const plant1 = useGLTF('/models/plant1.glb'); 
  const plant2 = useGLTF('/models/plant2.glb');

  const shelf = useGLTF('/models/shelf3.glb'); 
  const shelf2 = useGLTF('/models/shelf9.glb');
  const desk = useGLTF('/models/shelf10.glb');

  const frames = useGLTF('/models/frames.glb');
  const computer = useGLTF('/models/computer2.glb');
  const chair = useGLTF('/models/office_chair.glb');
  
  const rug = useGLTF('/models/rug.glb');
  const beanie = useGLTF('/models/bean_bag.glb');
  const windowModel = useGLTF('/models/window4.glb');
  const sky = useGLTF('/models/sky.glb');
  const clock = useGLTF('/models/clock3.glb');
  const map = useGLTF('/models/map3.glb');

  useEffect(() => {
    if (activeSection === 'skills') {
      // Wait for the camera animation to finish and then show the skills content
      setTimeout(() => {
        setShowSkills(true); // Show skills content after camera zoom
      }, 2000); // Wait for 2 seconds after the camera finishes moving
    } else {
      setShowSkills(false); // Hide when skills section is not active
    }
  }, [activeSection]);

  return (
    <group>
      {/* Computer */}
      <group position={[-4, 0, 3]} scale={[0.75, 0.75, 0.75]} rotation={[0, Math.PI, 0]}>
        <primitive object={computer.scene} />
        {showSkills && (
          <Html
            transform
            position={[1.5, 2.25, -0.85]} // Adjust to match the screen position
            rotation={[0, -Math.PI/2, 0]} // Align to face the camera
            scale={[0.245, 0.215, 0.1]} // Fit the content to the screen size
            style={{
              width: '35vw',
              height: '40vh',
              pointerEvents: 'auto',
            }}
          >
            <SkillsContent />
          </Html>
        )}
      </group>

      <group position={[-4.75, 1.5, -2.5]} scale={[1, 1, 1]} rotation={[0, Math.PI/2, 0]}>
        <primitive object={windowModel.scene} />
      </group>

      {/* <group position={[-4.8, 2.25, -2]} scale={[0.015, 0.015, 0.015]} rotation={[0, Math.PI, 0]}>
        <primitive object={sky.scene} />
      </group> */}


      {/* Other Decorative Elements */}
      <group position={[-4, 0.75, -4.45]} scale={[1.5, 1.5, 1.5]}>
        <primitive object={plant1.scene} />
      </group>

      <group position={[-2.5, 0.15, -4.5]} scale={[1, 1, 1]}>
        <primitive object={plant2.scene} />
      </group>

      <group position={[-3.5, 2.5, -4.85]} scale={[0.5, 0.5, 0.5]}>
        <primitive object={frames.scene} />
      </group>

      <group position={[3.25, 0, -4.5]} scale={[0.15, 0.15, 0.15]} rotation={[0, 0, 0]}>
        <primitive object={shelf.scene} />
      </group>

      <group position={[3.125, 0, -5.5]} scale={[0.125, 0.125, 0.125]} rotation={[0, 0, 0]}>
        <primitive object={shelf2.scene} />
      </group>

      {/* <group position={[-3, 0.25, 3.5]} scale={[1.5, 1.5, 1.5]} rotation={[0, -Math.PI / 2, 0]}>
        <primitive object={chair.scene} />
      </group> */}

      <group position={[-4, 0, -1]} scale={[0.055, 0.055, 0.055]} rotation={[0, Math.PI / 2, 0]}>
        <primitive object={desk.scene} />
      </group>

      <group position={[3, 0.19, 3]} scale={[1, 1, 1]} rotation={[0, 0, 0]}>
        <primitive object={rug.scene} />

      <group position={[0, 0, -0.5]} scale={[1, 1, 1]} rotation={[0, -Math.PI/2, 0]}>
        <primitive object={beanie.scene} />
      </group>

      <group position={[-3, 2.75, -7.75]} scale={[0.0035, 0.0035, 0.0025]}>
        <primitive object={clock.scene} /> 
      </group>

          {/* map2 */}
      {/* <group position={[-7.895, 3, -1.5]} scale={[0.01, 0.01, 0.005]} rotation={[0, Math.PI/2, 0]}>
        <primitive object={map.scene} /> 
      </group> */}

      {/* map3 */}
      
      <group position={[-7.815, 2.75, -1.75]} scale={[1.5, 1.5, 0.1]} rotation={[0, -Math.PI/2, 0]}>
        <primitive object={map.scene} /> 
      </group>



      </group>



    </group>
  );
}
