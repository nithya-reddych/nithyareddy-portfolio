// import { useCallback } from 'react';
// import { useStore } from '../store/useStore';
// import type { AudioError } from './types';

// export function useAudioError() {
//   const { setAudioError } = useStore();

//   const handleError = useCallback((error: MediaError | null) => {
//     if (!error) {
//       setAudioError(null);
//       return;
//     }

//     let audioError: AudioError;

//     switch (error.code) {
//       case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
//         audioError = {
//           type: 'format',
//           message: 'This audio format is not supported. Please try a different file.'
//         };
//         break;
//       case MediaError.MEDIA_ERR_NETWORK:
//         audioError = {
//           type: 'network',
//           message: 'Network error while loading audio. Please check your connection.'
//         };
//         break;
//       default:
//         audioError = {
//           type: 'unknown',
//           message: 'An error occurred while playing the audio.'
//         };
//     }

//     setAudioError(audioError);
//   }, [setAudioError]);

//   return handleError;
// }