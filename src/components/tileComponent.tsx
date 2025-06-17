import type { funcSetTile } from "./container";
import { tileImages } from "./tileInfo";
import type { Tile } from "./types";

export default function TileComponent(prop: props) {
  const tileId = prop.tileData.tileId;
  return (
    <>
      <div className="bg-yellow-100">
        <img
          className="hover:opacity-75"
          src={tileImages[tileId]}
          onClick={() => prop.func(prop.tileData.posY, prop.tileData.posX)}
        ></img>
      </div>
    </>
  );
}

type props = {
  tileData: Tile;
  func: funcSetTile;
};
