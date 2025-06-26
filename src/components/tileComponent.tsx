import { useContext } from "react";
import type { funcSetTile } from "./container";
import { tileImages } from "./tileInfo";
import type { Tile } from "./types";
import { ThemeContext } from "./container";

export default function TileComponent(prop: props) {
  const tileId = prop.tileData.tileId;
  const tileDisplay = useContext(ThemeContext);

  function getThing(val: boolean) {
    if (val) {
      return (
        <div className="fixed z-10 text-xs">
          {prop.tileData.posX + "/" + prop.tileData.posY}
        </div>
      );
    }
    return <></>;
  }

  return (
    <>
      <div className="bg-yellow-100">
        <img
          className="hover:opacity-75"
          src={tileImages[tileId]}
          onClick={() => prop.func(prop.tileData.posY, prop.tileData.posX)}
          draggable="false"
        ></img>
        {getThing(tileDisplay)}
      </div>
    </>
  );
}

type props = {
  tileData: Tile;
  func: funcSetTile;
};
