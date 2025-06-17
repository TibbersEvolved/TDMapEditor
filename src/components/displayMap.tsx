import type { funcSetTile } from "./container";
import TileComponent from "./tileComponent";
import type { Field } from "./types";

export default function DisplayMap(prop: props) {
  return (
    <>
      <div className="flex flex-col">
        {prop.field.tiles.map((f, key) => {
          return (
            <>
              <div key={key} className="flex">
                {f.map((t, k2) => {
                  return (
                    <TileComponent tileData={t} key={k2} func={prop.func} />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

type props = {
  field: Field;
  func: funcSetTile;
};
