import { Sun, Tv, Lamp as LampIcon } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function LightingControls() {
  const {
    ambientIntensity,
    tvBacklightIntensity,
    cornerLightIntensity,
    setAmbientIntensity,
    setTvBacklightIntensity,
    setCornerLightIntensity,
  } = useStore();

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Lighting</h3>
      <div className="flex flex-col gap-3 text-rose" >
        <div className="flex items-center gap-2">
          <Sun size={16} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={ambientIntensity}
            onChange={(e) => setAmbientIntensity(Number(e.target.value))}
            className="w-24 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <Tv size={16} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={tvBacklightIntensity}
            onChange={(e) => setTvBacklightIntensity(Number(e.target.value))}
            className="w-24 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <LampIcon size={16} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={cornerLightIntensity}
            onChange={(e) => setCornerLightIntensity(Number(e.target.value))}
            className="w-24 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}