import { create } from 'zustand';
import type { AudioError } from '../audio/types';

interface StoreState {
  lampColor: string;
  currentMusic: string | null;
  isPlaying: boolean;
  currentCharacter: 'dog';
  characterAction: 'idle' | 'walk' | 'sit' | 'wag';
  ambientIntensity: number;
  tvBacklightIntensity: number;
  cornerLightIntensity: number;
  activeSection: string | null;
  showContent: boolean;
  audioError: AudioError | null;
  setLampColor: (color: string) => void;
  setCurrentMusic: (music: string | null) => void;
  setIsPlaying: (playing: boolean) => void;
  setCurrentCharacter: (character: 'dog') => void;
  setCharacterAction: (action: 'idle' | 'walk' | 'sit' | 'wag') => void;
  setAmbientIntensity: (intensity: number) => void;
  setTvBacklightIntensity: (intensity: number) => void;
  setCornerLightIntensity: (intensity: number) => void;
  setActiveSection: (section: string | null) => void;
  setShowContent: (show: boolean) => void;
  setAudioError: (error: AudioError | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  lampColor: '#c05780',
  currentMusic: null,
  isPlaying: false,
  currentCharacter: 'dog',
  characterAction: 'idle',
  ambientIntensity: 0.1,
  tvBacklightIntensity: 0.3,
  cornerLightIntensity: 0.5,
  activeSection: null,
  showContent: false,
  audioError: null,
  setLampColor: (color) => set({ lampColor: color }),
  setCurrentMusic: (music) => set({ currentMusic: music }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setCurrentCharacter: (character) => set({ currentCharacter: character }),
  setCharacterAction: (action) => set({ characterAction: action }),
  setAmbientIntensity: (intensity) => set({ ambientIntensity: intensity }),
  setTvBacklightIntensity: (intensity) => set({ tvBacklightIntensity: intensity }),
  setCornerLightIntensity: (intensity) => set({ cornerLightIntensity: intensity }),
  setActiveSection: (section) => set({ activeSection: section }),
  setShowContent: (show) => set({ showContent: show }),
  setAudioError: (error) => set({ audioError: error })
}));