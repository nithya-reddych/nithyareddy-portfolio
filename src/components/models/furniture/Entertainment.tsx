import { Box, Cylinder } from '@react-three/drei';
import { TVScreen } from './tv/TVScreen';
import { useGLTF } from '@react-three/drei';

export function Entertainment() {
  const tvshelf = useGLTF('/models/tv_shelf.glb');
  return (
    <group position={[0, 0, -4]}>
      {/* TV Unit */}
      

      {/* TV Screen and Content */}
      <TVScreen />

      {/* TV Stand */}
      {/* <Box args={[0.1, 0.8, 0.4]} position={[-1.2, 1.2, -0.15]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      <Box args={[0.1, 0.8, 0.4]} position={[1.2, 1.2, -0.15]}>
        <meshStandardMaterial color="#ffffff" />
      </Box> */}

      {/* <Cylinder args={[0.15, 0.15, 0.3]} position={[-1.2, 0.8, 0.2]}>
        <meshStandardMaterial color="#dfcab0" />
      </Cylinder>
      <Box args={[0.8, 0.2, 0.4]} position={[0, 0.8, 0.2]}>
        <meshStandardMaterial color="#ceaf87" />
      </Box>
      <Cylinder args={[0.15, 0.15, 0.3]} position={[1.2, 0.8, 0.2]}>
        <meshStandardMaterial color="#dfcab0" />
      </Cylinder> */}


      <group position={[0, 0.25, -0.25]} rotation={[0, 0, 0]}>
        <primitive object={tvshelf.scene} scale={[1.75, 1.5, 1.5]} />
      </group>



    </group>
  );
}