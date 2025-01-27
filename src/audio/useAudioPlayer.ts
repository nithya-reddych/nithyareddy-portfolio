import { useEffect, useRef, useCallback, useState } from 'react';
import { Song } from './types';
import { useStore } from '../store/useStore';

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setAudioError } = useStore();

  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = useCallback(async () => {
    if (!audioRef.current || !currentSong) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setAudioError(null);
    } catch (error) {
      setAudioError({
        type: 'unknown',
        message: 'Failed to play audio'
      });
    }
  }, [currentSong, setAudioError]);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const setSong = useCallback(async (song: Song) => {
    if (!audioRef.current) return;
    
    audioRef.current.pause();
    audioRef.current.src = song.url;
    audioRef.current.load();
    setCurrentSong(song);
    
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setAudioError(null);
    } catch (error) {
      setAudioError({
        type: 'unknown',
        message: 'Failed to play audio'
      });
    }
  }, [setAudioError]);

  const adjustVolume = useCallback((newVolume: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  }, []);

  return {
    isPlaying,
    currentSong,
    volume,
    play,
    pause,
    setSong,
    setVolume: adjustVolume
  };
}