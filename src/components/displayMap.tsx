import { useContext } from "react";
import type { funcSetTile } from "./container";
import TileComponent from "./tileComponent";
import type { Field } from "./types";

export default function DisplayMap(prop: props) {
  return (
    <>
      <div className="gameGrid">
        {prop.field.tiles.map((f) => {
          return (
            <>
              {f.map((t, k2) => {
                return <TileComponent tileData={t} key={k2} func={prop.func} />;
              })}
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
