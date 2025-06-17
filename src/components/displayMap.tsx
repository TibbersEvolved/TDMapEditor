import TileComponent from "./tileComponent";
import type { Field } from "./types";

export default function DisplayMap(prop: Field) {
  return (
    <>
      <div className="flex flex-col">
        {prop.tiles.map((f, key) => {
          return (
            <>
              <div key={key} className="flex">
                {f.map((t, k2) => {
                  return <TileComponent tileData={t} key={k2} />;
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
