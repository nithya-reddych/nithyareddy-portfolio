import { LampColorControls } from './controls/LampColorControls';
import { LightingControls } from './controls/LightingControls';
import { MusicControls } from './controls/MusicControls';
import { CharacterControls } from './controls/CharacterControls';

export function Controls() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
      <div className="max-w-4xl mx-auto font-font3 text-lg flex justify-between items-start gap-8">
        <LampColorControls />
        <LightingControls />
        <MusicControls />
        <CharacterControls />
      </div>
    </div>
  );
}