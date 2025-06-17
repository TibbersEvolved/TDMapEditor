import { useState } from "react";
import { GenerateBlankMap } from "./utility";

export default function Container() {
  const [gameMap, setGameMap] = useState(GenerateBlankMap());

  return (
    <>
      <div className="flex justify-center border-2 border-emerald-400">
        Map Editor Tool
      </div>
      <section className="grid grid-cols-2">
        <div>Map Preview</div>
        <div>
          <div>Map Console</div>
          <div>{gameMap.Name}</div>
        </div>
      </section>
    </>
  );
}
