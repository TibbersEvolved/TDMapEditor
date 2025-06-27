import { createContext, useState } from "react";
import {
  buildRoad,
  EndRoad,
  GenerateBlankMap,
  StartPath,
  ValidateRoad,
} from "./utility";
import DisplayMap from "./displayMap";
import ListTileTypes from "./listTileTypes";
import type { GameMap, PathPointer } from "./types";
import ButtonTileBrush from "./buttonTileBrush";
import DownloadButton from "./downloadButton";
import BuildModebuttons from "./buildModeButtons";
import bgStony from "../assets/bgStony.png";

export const ThemeContext = createContext(false);
export const BuildContext = createContext(0);

export default function Container() {
  const [gameMap, setGameMap] = useState(GenerateBlankMap());
  const [modeSet, setModeSet] = useState(0);
  const [buildMode, setBuildMode] = useState(0);
  const [displayGrid, setDisplayGrid] = useState(false);
  const [roadPoint, setRoadPoint] = useState(StartPath());
  let buttonCol = "bg-stone-500";
  let displayGridButtonText = "Show Grid";
  if (displayGrid) {
    buttonCol = "bg-emerald-500";
    displayGridButtonText = "Hide Grid";
  }

  function copyGameMap() {
    return {
      Name: gameMap.Name,
      Description: gameMap.Description,
      Clime: gameMap.Clime,
      Field: gameMap.Field,
      Difficulty: gameMap.Difficulty,
      Paths: gameMap.Paths,
      PathIndex: gameMap.PathIndex,
    };
  }

  function changeTile(y: number, x: number) {
    if (buildMode === 0) {
      let tempMap: GameMap = copyGameMap();
      tempMap.Field.tiles[19 - y][19 - x].tileId = modeSet;
      console.log(
        "Ran function, tried to set " + y + "/" + x + " to " + modeSet
      );
      setGameMap(tempMap);
    }
    if (buildMode === 1) {
      buildRoadState(x, y);
    }
  }

  function changeName(name: string) {
    let tempMap = copyGameMap();
    tempMap.Name = name;
    setGameMap(tempMap);
  }

  function changeDescription(desc: string) {
    let tempMap = copyGameMap();
    tempMap.Description = desc;
    setGameMap(tempMap);
  }

  function buildRoadState(xto: number, yto: number) {
    console.log("Entered the buildroadState function, with");
    console.log(
      "Xto:" + xto + " yto:" + yto + " tempRoadIndex: " + roadPoint.index
    );
    console.log("RoadX: " + roadPoint.x + " RoadY:" + roadPoint.y);
    let tempMap = copyGameMap();
    let tempRoadPoint: PathPointer = {
      x: roadPoint.x,
      y: roadPoint.y,
      index: roadPoint.index,
    };
    if (tempRoadPoint.index == 0) {
      if (yto === 0) {
        tempRoadPoint.x = xto;
        tempRoadPoint.y = yto;
        tempRoadPoint.index = 1;
        tempMap.Field.tiles[19 - yto][19 - xto].tileId = 1;
        tempMap.Paths.push([]);
        tempMap.Paths[tempMap.PathIndex].push({
          x: xto,
          y: yto,
        });
        console.log("Ran place first road thing");
        setGameMap(tempMap);
        setRoadPoint(tempRoadPoint);
      }
    } else {
      let validation = ValidateRoad(xto, yto, roadPoint.x, roadPoint.y);
      console.log("Did validation with result: " + validation);
      if (validation != 0) {
        tempMap = buildRoad(
          yto,
          xto,
          roadPoint.x,
          roadPoint.y,
          tempMap,
          validation
        );
        tempRoadPoint.x = xto;
        tempRoadPoint.y = yto;
        tempRoadPoint.index = 1;
      }
      setGameMap(tempMap);
      setRoadPoint(tempRoadPoint);
    }
  }

  function changeBrush(x: number) {
    setModeSet(x);
  }

  function changeBuildMode(x: number) {
    if (buildMode === x) {
      return;
    }
    if (buildMode === 0 && x === 1) {
      setRoadPoint(StartPath());
      setBuildMode(x);
    }
    if (buildMode === 1 && x === 0) {
      let tempMap = copyGameMap();
      tempMap = EndRoad(tempMap);
      setGameMap(tempMap);
      setBuildMode(x);
    }
  }

  const tileList = [0, 2, 3, 4, 5, 6];

  return (
    <>
      <BuildContext value={buildMode}>
        <ThemeContext value={displayGrid}>
          <div className="flex justify-center border-2 border-emerald-400">
            Map Editor Tool
          </div>
          <section className="grid grid-cols-2">
            <section className="p-2">
              <div className="text-center">Map Preview</div>
              <DisplayMap field={gameMap.Field} func={changeTile} />
            </section>
            <div className="flex flex-col  text-center p-2">
              <div>Map Console</div>
              <section
                className={
                  "flex flex-col rounded-md shadow-md border-2 border-amber-950 mb-2 bIStone "
                }
              >
                <div>Map Details</div>
                <div>Map Name: {gameMap.Name}</div>
                <div className="italic text-gray-400">
                  {gameMap.Description}
                </div>
              </section>
              <ListTileTypes tiles={gameMap.Field.tiles} />
              <div className="flex gap-2 justify-center mt-2">
                {tileList.map((s, key) => (
                  <ButtonTileBrush
                    tileId={s}
                    key={key}
                    activeID={modeSet}
                    onClick={changeBrush}
                  />
                ))}
              </div>
              <BuildModebuttons func={(i) => changeBuildMode(i)} />
              <div className="flex justify-center">
                <button
                  className={"mt-2  rounded-sm p-2 " + buttonCol}
                  onClick={() => setDisplayGrid(!displayGrid)}
                >
                  {displayGridButtonText}
                </button>
              </div>
              <DownloadButton map={gameMap} />
            </div>
          </section>
        </ThemeContext>
      </BuildContext>
    </>
  );
}

export type funcSetTile = {
  (y: number, x: number): void;
};

export type funcSetBuildMode = {
  (int: number): void;
};
