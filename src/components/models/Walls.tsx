import { Box, Line } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

export function Walls() {
  const floor = useGLTF('/models/floor3.glb');
  
  return (

    
    <group>

    {/* <group position={[0.095, 0.195, 0.095]} scale={[0.03875, 0.1, 0.03875]}>
      <primitive object={floor.scene} /> floor1
    </group> */}

    <group position={[0.07, 0.185, 0.07]} scale={[4.9295, 5, 4.9295]}>
      <primitive object={floor.scene} />
    </group>

    

      
      {/* Floor */}
      <Box args={[10, 0.265, 10]} position={[0, 0.05, 0]}>
        <meshStandardMaterial 
          color="#fdba74" 
          roughness={0.5}
          metalness={0.1}
        />      
      </Box>
      {/* Floor Borders */}
  
      <Box args={[0, 0.25, 10]} position={[5.005, 0.05, 0.01]}>
        <meshStandardMaterial color="#fdba74" />
      </Box>



      <Box args={[10, 0.25, 0]} position={[0.01, 0.05, 5.005]}>
        <meshStandardMaterial color="#fdba74" />
      </Box>

      {/* Back Wall */}
      <Box args={[10, 5, 0.25]} position={[0, 2.425, -5]}>
        <meshStandardMaterial 
          color="#fdba74"
          roughness={0.3} 
          metalness={0} 
          envMapIntensity={1.5} 
        />
      </Box>
      {/* Back Wall Borders */}
      
      <Box args={[0, 5.01, 0.255]} position={[5.01, 2.425, -5]}>
        <meshStandardMaterial color="#fdba74" />
      </Box>
      {/* <Box args={[10.01, 0, 0.25]} position={[0.025, 14.935, -5]}>
        <meshStandardMaterial color="#fdba74" />
      </Box> */}
     
      {/* Side Wall */}
      <Box args={[0.25, 5, 10]} position={[-5, 2.425, 0]}>
        <meshStandardMaterial 
          color="#fdba74" 
          roughness={0.3} 
          metalness={0} 
          envMapIntensity={1.5} 
        />
      </Box>
      {/* Side Wall Borders */}
      
      <Box args={[0.2575, 5.0105, 0]} position={[-5.0125, 2.4275, 5.019]}>
        <meshStandardMaterial color="#fdba74" />
      </Box>
      
      {/* <Box args={[0.25, 0, 10.0105]} position={[-5, 4.93, 0.025]}>
        <meshStandardMaterial color="#fdba74" />
      </Box> */}

      {/* Line Between Side and Back Wall */}
      <Box args={[0.1,5,0.1]}position = {[-4.875,2.425,-4.875]} >
      <meshStandardMaterial 
      color="#fdba74"
      roughness={0.3} 
          metalness={0} 
          envMapIntensity={1} 
      
      />
      
    
      </Box>
      {/* <Line
        points={[
          [-4.875, 0, -4.825], 
          [-4.875, 4.925, -4.825], 
        ]}
        color="#6a8540" 
        lineWidth={2} 
      /> */}

      
      <pointLight
        position={[5.2, 5.2, -4.2]}
        intensity={1}
        distance={5}
        decay={2} 
        color="#ffffff"
      />
    </group>
  );
}
