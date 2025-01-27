import { useStore } from '../../store/useStore';

const colors = [
  { name: 'Calm', value: '#c05780' },
  { name: 'Warm', value: '#00A5E3' },
  { name: 'Cool', value: '#ffa23a' },
  { name: 'Romantic', value: '#cff800' },
];

export function LampColorControls() {
  const { lampColor, setLampColor } = useStore();

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold font-font3">Lamp Colors</h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`w-8 h-8 rounded-full border-2 ${
              lampColor === color.value ? 'border-white' : 'border-transparent'
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => setLampColor(color.value)}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}