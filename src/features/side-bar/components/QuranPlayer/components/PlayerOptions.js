import React from "react";
import Button from "components/Button";
import { ReactComponent as PlayIcon } from "assets/playiconbold.svg";
import { ReactComponent as PauseIcon } from "assets/pauseiconbold.svg";
import { ReactComponent as Volume } from "assets/volumeUp.svg";
import { ReactComponent as Random } from "assets/randomicon.svg";
const PlayerOptions = ({
  togglePlayback,
  reciterUrl,
  reciterName,
  isPlaying,
  changeVolume,
}) => {
  return (
    <div className="backdrop-blur-4xl w-full flex absolute bottom-0 p-2 gap-x-2.5">
      <Button
        onClick={togglePlayback}
        disabled={!reciterUrl && true}
        accessability={
          !reciterUrl
            ? `Please select an audio to stream`
            : `${isPlaying ? "Pause" : "Play"} stream`
        }
        className="hover:opacity-50 flex justify-center focus:outline-none disabled:opacity-50"
      >
        {isPlaying ? <PauseIcon className="w-12" /> : <PlayIcon className="w-12" />}
      </Button>
      <div className="flex grow flex-row flex-nowrap items-center  text-end flex-wrap gap-x-3 relative">
        <label
          htmlFor="volume"
          className="group relative flex items-center h-full"
          title="Adjust the volume"
        >
          <Volume className="w-6" />
          <span className="bg-gray-200/70 absolute flex justify-center bottom-16 left-[-25px] rounded-2xl p-2 rotate-[-90deg] scale-x-0  group-hover:scale-x-100">
            <input
              type="range"
              onChange={(e) => changeVolume(e.target.value)}
              name="volume"
              min="0"
              max="1"
              step="0.05"
              className="range-input"
            />
          </span>
        </label>
        <Button
          onClick={() => {
            const list = document.querySelectorAll(
              ".reciters-list button:not(.selected-reciter)"
            );
            list[Math.round(Math.random() * list.length)].click();
          }}
          accessability="Get random stream"
        >
          <Random className="w-6" />
        </Button>
        <span className="rtl flex-1 max-h-12 overflow-clip">
          {!reciterName ? "Please select an audio to stream" : reciterName}
        </span>
      </div>
    </div>
  );
};

export default PlayerOptions;
