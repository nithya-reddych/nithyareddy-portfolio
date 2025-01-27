import { Html } from '@react-three/drei';
import { ProjectsDisplay } from './ProjectsDisplay';

export function TVContent() {
  return (
    <Html
      transform
      occlude
      position={[1.45, -0.825, 0.02]}
      rotation={[0, 0, 0]}
      style={{
        width: '600px',
        height: '338px',
        transform: 'translate(-50%, -50%)',
        transformStyle: 'preserve-3d',
        pointerEvents: 'auto'
      }}
      distanceFactor={1.95}
      className="select-none"
    >
      <ProjectsDisplay />
    </Html>
  );
}