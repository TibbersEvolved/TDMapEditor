import type { GameMap, Tile } from "./types";

export function GenerateBlankMap() {
  let map: GameMap = {
    Name: "New Map",
    Description: "Describe your creation",
    Clime: "Grass",
    Field: {
      tiles: [],
    },
    Difficulty: 0,
  };
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      map.Field.tiles[j][i] = GenGrass(j, i);
    }
  }
  return map;
}

export function GenGrass(xp: number, yp: number) {
  let rVal: Tile = {
    posX: xp,
    posY: yp,
    tileId: 0,
  };
  return rVal;
}
