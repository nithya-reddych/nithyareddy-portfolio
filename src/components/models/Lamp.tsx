import { Cylinder, Cone } from '@react-three/drei';
import { useStore } from '../../store/useStore';

export function Lamp() {
  const { lampColor } = useStore();

  return (
    <group position={[2.5, 0.2, 1]}>
      {/* Base */}
      <Cylinder args={[0.2, 0.3, 0.1, 32]} position={[0, 0.05, 0]}>
      <meshStandardMaterial color="#2f2f2f"opacity={1} transparent />
      </Cylinder>
      
      {/* Stand */}
      <Cylinder args={[0.05, 0.05, 2, 32]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#2f2f2f"opacity={1} transparent />
      </Cylinder>
      
      {/* Shade */}
      <Cylinder args={[0.3, 0.6, 0.8, 32, 1, false]} position={[0, 2, 0]} rotation={[0, 0, Math.PI]} scale={[1, -1, 1]}>
        <meshStandardMaterial color={lampColor} side={2} opacity={1} transparent />
      </Cylinder>



    </group>
  );
}