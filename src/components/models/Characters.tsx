import { useStore } from '../../store/useStore';
import { Dog } from './characters/Dog';

export function Characters() {
  const { currentCharacter } = useStore();

  return (
    <>
      {currentCharacter === 'dog' && <Dog />}
    </>
  );
}