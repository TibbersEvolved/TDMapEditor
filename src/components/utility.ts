import { createContext } from "react";
import type { GameMap, Tile } from "./types";

const ThemeContext = createContext(false);

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
      map.Field.tiles[i][j] = GenGrass(19 - i, 19 - j);
    }
  }
  return map;
}

export function GenGrass(yp: number, xp: number) {
  let rVal: Tile = {
    posX: xp,
    posY: yp,
    tileId: 0,
  };
  return rVal;
}

//Case 0 = invalid path
//Case 1 = upgoing path
//Case 2 = right path
//Case 3 = left path
export function ValidateRoad(
  yp: number,
  xp: number,
  xpStart: number,
  ypStart: number
) {
  if (yp > ypStart) {
    if (xp === xpStart) {
      return 1;
    }
  }
  if (yp === ypStart) {
    if (xp > xpStart) {
      return 2;
    }
    if (xp < xpStart) {
      return 3;
    }
  }
  return 0;
}
