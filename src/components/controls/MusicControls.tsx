import { Music, Pause, Play, Volume2, AlertCircle } from 'lucide-react';
import { songs } from '../../audio/songs';
import { useAudioPlayer } from '../../audio/useAudioPlayer';
import { useStore } from '../../store/useStore';

export function MusicControls() {
  const { isPlaying, currentSong, play, pause, setSong, setVolume } = useAudioPlayer();
  const { audioError } = useStore();

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      if (!currentSong && songs.length > 0) {
        setSong(songs[0]);
      }
      play();
    }
  };

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Music</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayPause}
          className="p-2 text-rose hover:bg-white/20 rounded-full transition-colors"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-rose" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="0.7"
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => setSong(song)}
              className={`flex items-center text-rose gap-2 px-3 py-1 rounded-full transition-colors ${
                currentSong?.id === song.id ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              title={song.credits}
            >
              <Music size={20} />
              <span className="text-sm">{song.name}</span>
            </button>
          ))}
        </div>
      </div>

      {audioError && (
        <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
          <AlertCircle size={16} />
          <span>{audioError.message}</span>
        </div>
      )}
    </div>
  );
}