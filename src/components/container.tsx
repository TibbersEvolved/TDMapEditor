import { useState } from "react";
import { GenerateBlankMap } from "./utility";
import DisplayMap from "./displayMap";

export default function Container() {
  const [gameMap, setGameMap] = useState(GenerateBlankMap());

  return (
    <>
      <div className="flex justify-center border-2 border-emerald-400">
        Map Editor Tool
      </div>
      <section className="grid grid-cols-2">
        <section className="p-2">
          <div className="text-center">Map Preview</div>
          <DisplayMap tiles={gameMap.Field.tiles} />
        </section>
        <div>
          <div>Map Console</div>
          <div>{gameMap.Name}</div>
        </div>
      </section>
    </>
  );
}
