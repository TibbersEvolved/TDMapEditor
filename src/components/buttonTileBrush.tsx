import { tileImages } from "./tileInfo";

export default function ButtonTileBrush(prop: props) {
  let selected = "";
  if (prop.tileId === prop.activeID) {
    selected = "border-2 border-zinc-500";
  }

  return (
    <>
      <div className="bg-amber-50">
        <img
          src={tileImages[prop.tileId]}
          className={"size-12 hover:opacity-75 " + selected}
          onClick={() => prop.onClick(prop.tileId)}
        ></img>
      </div>
    </>
  );
}

type props = {
  tileId: number;
  activeID: number;
  onClick: (x: number) => void;
};
