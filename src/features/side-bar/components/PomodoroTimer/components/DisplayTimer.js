import React from "react";
import displayTime from "../utilities/displayTime";
import displayEndTime from "../utilities/displayEndTime";
import { ReactComponent as PauseIcon } from "assets/pauseIcon.svg";
import { ReactComponent as PlayIcon } from "assets/playIcon.svg";
import { ReactComponent as Restart } from "assets/restartIcon.svg";
import Button from "components/Button";

const DisplayTimer = ({
  timeLeft,
  isRunning,
  setIsRunning,
  handelRestartClick,
  totalTime,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] z-[888]">
      <span className="text-xs mb-[-20px]">
        {isRunning && displayEndTime(Date.now() + timeLeft * 1000)}
      </span>
      <h3 className=" font-bold text-6xl basis-full opacity-90" aria-label="Time left">
        {displayTime(timeLeft)}
      </h3>
      <Button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
        accessability={`${isRunning ? "Pause" : "Start"} Timer`}
        className="opacity-70 hover:opacity-50 focus:outline-none"
        disabled={timeLeft <= 0 && "disabled"}
      >
        {isRunning ? <PauseIcon className="w-8" /> : <PlayIcon className="w-8" />}
      </Button>
      <Button
        onClick={() => handelRestartClick(totalTime.current)}
        accessability="Restart Timer"
        className="opacity-70 hover:opacity-50 focus:outline-none disabled:opacity-50"
        disabled={isRunning === false && true}
      >
        <Restart className="w-8" />
      </Button>
    </div>
  );
};

export default DisplayTimer;
