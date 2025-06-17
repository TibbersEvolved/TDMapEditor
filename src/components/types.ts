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
};
