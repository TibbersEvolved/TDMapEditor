import { tileImages } from "./tileInfo";
import type { Tile } from "./types";

export default function TileComponent(prop: props) {
  const tileId = prop.tileData.tileId;
  return (
    <>
      <img src={tileImages[tileId]}></img>
    </>
  );
}

type props = {
  tileData: Tile;
};
