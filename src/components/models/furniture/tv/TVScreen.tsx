import { Box } from '@react-three/drei';
import { useStore } from '../../../../store/useStore';
import { TVContent } from './TVContent';

export function TVScreen() {
  const { activeSection } = useStore();
  const isOn = activeSection === 'projects';

  return (
    <group position={[0, 1.8, -0.15]}>
      <Box args={[3.2, 1.8, 0.1]} position={[0, 0, -0.05]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      
      <group position={[0, 0, 0]}>
        <Box args={[3, 1.7, 0.01]}>
          <meshStandardMaterial 
            color={isOn ? "#ffffff" : "#000000"} 
            emissive={isOn ? "#ffffff" : "#000000"}
            emissiveIntensity={isOn ? 2 : 0} 
          />
        </Box>
        {isOn && <TVContent />}
      </group>
    </group>
  );
}