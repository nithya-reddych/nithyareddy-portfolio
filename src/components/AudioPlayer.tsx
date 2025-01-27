import { useAudioPlayer } from '../audio/useAudioPlayer';
import { songs } from '../audio/songs';

export function AudioPlayer() {
  // Initialize audio player
  useAudioPlayer();
  
  return null; // This component only handles audio logic, no UI needed
}