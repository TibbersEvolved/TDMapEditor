export type Tile = {
  posX: number;
  posY: number;
  tileId: number;
};

export type Field = {
  tiles: Tile[][];
};

export type GameMap = {
  Name: String;
  Description: String;
  Field: Field;
  Clime: String;
  Difficulty: Number;
  Paths: PathPoint[][];
  PathIndex: number;
};

export type PathPoint = {
  x: number;
  y: number;
};

export type Path = {
  path: PathPoint[];
};

export type PathPointer = {
  index: number;
  x: number;
  y: number;
};
