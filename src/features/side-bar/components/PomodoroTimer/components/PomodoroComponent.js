import React from "react";
import displayTime from "../utilities/displayTime";
import displayEndTime from "../utilities/displayEndTime";
import Button from "components/Button";
import { ReactComponent as PauseIcon } from "assets/pauseIcon.svg";
import { ReactComponent as PlayIcon } from "assets/playIcon.svg";
import { ReactComponent as Restart } from "assets/restartIcon.svg";
import useNotification from "Hooks/useNotification";
const PomodoroComponent = ({
  timeLeft,
  totalTime,
  isRunning,
  setIsRunning,
  setTimeLeft,
}) => {
  const showNotification = useNotification();
  const strokeDasharray = (timeLeft / totalTime.current) * 283;
  const changeTitle = () => {
    isRunning
      ? (document.title = `${displayTime(timeLeft)} - Focus Hub`)
      : (document.title = "Focus Hub");
  };
  changeTitle();

  const handelClick = (e, time) => {
    setIsRunning(true);
    setTimeLeft(time);
    totalTime.current = time;
    e.target.classList.add("opacity-1");
    document.querySelectorAll(".time-options > button").forEach((button) => {
      if (button !== e.target) {
        button.classList.remove("opacity-1");
      }
    });
  };

  const handelRestartClick = (time) => {
    setIsRunning(true);
    setTimeLeft(time);
    totalTime.current = time;
  };
  return (
    <section className="w-full flex items-center justify-center flex-col ">
      {/* <button onClick={() => showNotification("finish", "you made it")}>cl</button> */}
      <header className="w-full p-3 flex justify-center gap-x-1.5 text-sm font-semibold [&>button]:whitespace-nowrap time-options ">
        <Button handelClick={(e) => handelClick(e, 1500)} className="opacity-1">
          Pomodoro
        </Button>
        <Button handelClick={(e) => handelClick(e, 5)}>Short Break</Button>
        <Button handelClick={(e) => handelClick(e, 900)}>Long Break</Button>
      </header>

      <div className="relative">
        <div className="flex flex-wrap gap-3 justify-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] z-[888]">
          <span className="text-xs mb-[-20px]">
            {isRunning && displayEndTime(Date.now() + timeLeft * 1000)}
          </span>
          <h3 className=" font-bold text-6xl basis-full opacity-90">
            {displayTime(timeLeft)}
          </h3>
          <Button
            handelClick={() => {
              setIsRunning(!isRunning);
            }}
            accessability={`${isRunning ? "Pause" : "Start"} Timer`}
            className="opacity-70 hover:opacity-50 focus:outline-none"
            disabled={timeLeft <= 0 && "disabled"}
          >
            {isRunning ? <PauseIcon className="w-8" /> : <PlayIcon className="w-8" />}
          </Button>
          <Button
            handelClick={() => handelRestartClick(totalTime.current)}
            accessability="Restart Timer"
            className="opacity-70 hover:opacity-50 focus:outline-none"
          >
            <Restart className="w-8" />
          </Button>
        </div>

        <svg
          className="m-auto p-4 w-60 scale-x-[-1] pt-0"
          // width="100%"
          // height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="none">
            <circle strokeWidth="7px" stroke="gray" cx="50" cy="50" r="45" />
            <path
              className={`origin-center rotate-90  ease-linear duration-1000 ${
                (timeLeft / totalTime.current) * 100 < 20
                  ? "text-red-500"
                  : "text-cyan-400"
              } ${totalTime.current <= 900 ? "text-green-300" : ""} `}
              strokeDasharray={`${Number(strokeDasharray)} 283`}
              stroke="currentColor"
              strokeWidth="7px"
              d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default PomodoroComponent;
