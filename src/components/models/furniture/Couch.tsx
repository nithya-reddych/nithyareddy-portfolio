import { useGLTF } from '@react-three/drei';
import { Person } from './Person';

export function Couch() {
  const sofa = useGLTF('/models/sofa.glb'); 

  return (
    <group>
      <group position={[0, 0, 0.5]} rotation={[0, Math.PI, 0]}>
        <primitive object={sofa.scene} scale={[0.04, 0.03, 0.03]} />
      </group>

      <Person />
      
    </group>
  );
}


