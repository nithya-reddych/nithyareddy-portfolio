import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useStore } from '../store/useStore';
import { PointLight, SpotLight } from 'three';
import { Characters } from './models/Characters';
import { Furniture } from './models/Furniture';
import { Walls } from './models/Walls';
import { Lamp } from './models/Lamp';

export function Room() {
  const lampLight = useRef<PointLight>(null);
  const { 
    lampColor, 
    ambientIntensity,
    tvBacklightIntensity,
    cornerLightIntensity 
  } = useStore();

  useFrame(() => {
    if (lampLight.current) {
      lampLight.current.color.set(lampColor);
    }
  });

  return (
    <group>
      <Walls />
      <Furniture />
      <Lamp />
      <Characters />
      
      {/* Main lamp light */}
      <pointLight
        ref={lampLight}
        position={[0, 2, 0]}
        intensity={3}
        distance={5}
        decay={2}
      />
      {/* Ambient corner lights */}
      <pointLight 
        position={[-2, 2, -2]} 
        intensity={cornerLightIntensity} 
        color="#ffd1dc" 
      />
      {/* TV backlight */}
      <spotLight
        position={[0, 1.7, -4.8]}
        angle={Math.PI / 4}
        intensity={tvBacklightIntensity}
        color="#ffffff"
        target-position={[0, 1.7, -4]}
      />
      {/* Ambient light */}
      <ambientLight intensity={ambientIntensity} />
    </group>
  );
}