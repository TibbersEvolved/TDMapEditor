import { useState } from "react";
import { GenerateBlankMap } from "./utility";
import DisplayMap from "./displayMap";
import ListTileTypes from "./listTileTypes";
import type { GameMap } from "./types";
import ButtonTileBrush from "./buttonTileBrush";

export default function Container() {
  const [gameMap, setGameMap] = useState(GenerateBlankMap());
  const [modeSet, setModeSet] = useState(0);

  function changeTile(y: number, x: number) {
    let tempMap: GameMap = {
      Name: gameMap.Name,
      Description: gameMap.Description,
      Clime: gameMap.Clime,
      Field: gameMap.Field,
      Difficulty: gameMap.Difficulty,
    };
    tempMap.Field.tiles[y][x].tileId = modeSet;
    console.log("Ran function, tried to set " + y + "/" + x + " to " + modeSet);
    setGameMap(tempMap);
  }

  function changeBrush(x: number) {
    setModeSet(x);
  }

  const tileList = [0, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="flex justify-center border-2 border-emerald-400">
        Map Editor Tool
      </div>
      <section className="grid grid-cols-2">
        <section className="p-2">
          <div className="text-center">Map Preview</div>
          <DisplayMap field={gameMap.Field} func={changeTile} />
        </section>
        <div className="flex flex-col text-center p-2">
          <div>Map Console</div>
          <section className="flex flex-col border-2 border-rose-800 mb-2">
            <div>Map Details</div>
            <div>Map Name: {gameMap.Name}</div>
            <div className="italic text-gray-400">{gameMap.Description}</div>
          </section>
          <ListTileTypes tiles={gameMap.Field.tiles} />
          <div className="flex gap-2">
            {tileList.map((s, key) => (
              <ButtonTileBrush
                tileId={s}
                key={key}
                activeID={modeSet}
                onClick={changeBrush}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export type funcSetTile = {
  (y: number, x: number): void;
};
