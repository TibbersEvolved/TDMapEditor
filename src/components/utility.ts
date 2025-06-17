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
    map.Field.tiles[i] = [];
    for (let j = 0; j < 20; j++) {
      map.Field.tiles[i][j] = GenGrass(i, j);
    }
  }
  return map;
}

export function GenGrass(yp: number, xp: number) {
  let rVal: Tile = {
    posX: xp,
    posY: yp,
    tileId: Math.floor(Math.random() * 7),
  };
  return rVal;
}
