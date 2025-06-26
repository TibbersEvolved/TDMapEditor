import { createContext } from "react";
import type { GameMap, PathPoint, PathPointer, Tile } from "./types";

const ThemeContext = createContext(false);

export function GenerateBlankMap() {
  let tempArray: PathPoint[] = [];
  let map: GameMap = {
    Name: "New Map",
    Description: "Describe your creation",
    Clime: "Grass",
    Field: {
      tiles: [],
    },
    Difficulty: 0,
    Paths: [],
    PathIndex: 0,
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
  xp: number,
  yp: number,
  xpStart: number,
  ypStart: number
) {
  if (yp > ypStart) {
    if (xp === xpStart) {
      return 1;
    }
  }
  if (yp === ypStart) {
    if (xp < xpStart) {
      return 2;
    }
    if (xp > xpStart) {
      return 3;
    }
  }
  return 0;
}

export function AddPathPoint(x: number, y: number): PathPoint {
  return {
    x: x,
    y: y,
  };
}

export function buildRoad(
  yp: number,
  xp: number,
  xpStart: number,
  ypStart: number,
  mapObj: GameMap,
  roadType: number
) {
  if (roadType == 0) {
    console.log("invalid road");
  }
  if (roadType == 1) {
    for (let i = ypStart; i <= yp; i++) {
      mapObj.Field.tiles[19 - i][19 - xp].tileId = 1;
    }
    mapObj.Paths[mapObj.PathIndex].push({
      x: xp,
      y: yp,
    });
  }
  if (roadType == 2) {
    for (let i = xpStart; i >= xp; i--) {
      mapObj.Field.tiles[19 - yp][19 - i].tileId = 1;
    }
    mapObj.Paths[mapObj.PathIndex].push({
      x: xp,
      y: yp,
    });
  }
  if (roadType == 3) {
    for (let i = xpStart; i <= xp; i++) {
      mapObj.Field.tiles[19 - yp][19 - i].tileId = 1;
    }
    mapObj.Paths[mapObj.PathIndex].push({
      x: xp,
      y: yp,
    });
  }
  return mapObj;
}

export function StartPath(): PathPointer {
  return {
    index: 0,
    x: 0,
    y: 0,
  };
}

export function EndRoad(mapObj: GameMap) {
  let lt = mapObj.Paths[mapObj.PathIndex].length;
  mapObj.Paths.length;
  let pt = mapObj.Paths[mapObj.PathIndex][lt - 1];
  for (let i = pt.y; i < 20; i++) {
    mapObj.Field.tiles[19 - i][19 - pt.x].tileId = 1;
  }
  mapObj.Paths[mapObj.PathIndex].push({
    x: pt.x,
    y: 20,
  });
  mapObj.PathIndex += 1;
  return mapObj;
}
