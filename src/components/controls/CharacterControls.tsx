import { useStore } from '../../store/useStore';

const actions = ['idle', 'walk', 'sit', 'wag'] as const;

export function CharacterControls() {
  const { characterAction, setCharacterAction } = useStore();

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-font3 font-semibold">Actions</h3>
      <div className="flex gap-2">
        {actions.map((action) => (
          <button
            key={action}
            className={`px-3 py-1 rounded-full text-rose ${
              characterAction === action ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
            onClick={() => setCharacterAction(action)}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}