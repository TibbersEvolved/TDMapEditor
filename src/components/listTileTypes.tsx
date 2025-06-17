import type { Field } from "./types";

export default function ListTileTypes(prop: Field) {
  let [countRock, countGold, countWood, countWater] = [0, 0, 0, 0];
  prop.tiles.map((s) => {
    s.map((f) => {
      if (f.tileId == 2) {
        countRock++;
      }
      if (f.tileId == 3) {
        countWood++;
      }
      if (f.tileId == 4) {
        countGold++;
      }
      if (f.tileId == 5) {
        countWater++;
      }
    });
  });

  return (
    <>
      <section className="flex flex-col border-2 border-amber-800 bg-zinc-700">
        <header className="font-bold">Map Economy</header>
        <div>Rock Tiles: {countRock}</div>
        <div>Gold Tiles: {countGold}</div>
        <div>Forest Tiles: {countWood}</div>
        <div>Water Tiles: {countWater}</div>
      </section>
    </>
  );
}
