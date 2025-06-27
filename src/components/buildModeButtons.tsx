import { useContext } from "react";
import { BuildContext, type funcSetBuildMode } from "./container";

export default function BuildModebuttons(prop: props) {
  const current = useContext(BuildContext);

  function getColor(val: number) {
    if (current === val) {
      return "bg-emerald-500";
    }
    return "bg-stone-500";
  }

  return (
    <>
      <div className="flex gap-2 justify-center mt-2 p-3">
        <button
          className={getColor(0) + " p-2 rounded-sm"}
          onClick={() => prop.func(0)}
        >
          Place Mode
        </button>
        <button
          className={getColor(1) + " p-2 rounded-sm"}
          onClick={() => prop.func(1)}
        >
          Road Mode
        </button>
      </div>
    </>
  );
}

type props = {
  func: funcSetBuildMode;
};
