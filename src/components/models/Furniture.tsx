import { Couch } from './furniture/Couch';
import { Entertainment } from './furniture/Entertainment';
import { Decorations } from './furniture/Decorations';
import { CoffeeTable } from './furniture/CoffeeTable';

export function Furniture() {
  return (
    <group>
      <Couch />
      <Entertainment />
      <Decorations />
      <CoffeeTable />
    </group>
  );
}