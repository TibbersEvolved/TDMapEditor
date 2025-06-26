import type { GameMap } from "./types";

type props = {
  map: GameMap;
};

export default function DownloadButton(prop: props) {
  return (
    <>
      <div className="flex justify-center bg-emerald-300">
        <a href={GetJsonMap(prop.map)} download>
          Download
        </a>
      </div>
    </>
  );
}

function GetJsonMap(mapObj: GameMap) {
  const json = JSON.stringify(mapObj);
  console.log("Filename: " + mapObj.Name.toString());
  const file = new File([json], mapObj.Name.toString(), {
    type: "application/json",
  });
  const url = window.URL.createObjectURL(file);
  return url;
}
