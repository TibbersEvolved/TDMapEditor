import type { GameMap } from "./types";

type props = {
  map: GameMap;
};

export default function DownloadButton(prop: props) {
  return (
    <>
      <div className="flex justify-center">
        <a
          href={GetJsonMap(prop.map)}
          className="bg-emerald-300 mt-2 p-2 border-2 border-emerald-700"
          download
        >
          Download
        </a>
      </div>
    </>
  );
}

function GetJsonMap(mapObj: GameMap) {
  const json = JSON.stringify(mapObj);
  const file = new File([json], mapObj.Name.toString(), {
    type: "application/json",
  });
  const url = window.URL.createObjectURL(file);
  return url;
}
