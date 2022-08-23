import React from "react";
import { toast } from "react-toastify";
import displayTime from "../utilities/displayTime";
import useNotification from "Hooks/useNotification";
import DisplayTimer from "./DisplayTimer";
import TimeOptions from "./TimeOptions";
let didInit = false;
const PomodoroComponent = ({
  timeLeft,
  totalTime,
  isRunning,
  setIsRunning,
  setTimeLeft,
}) => {
  const [, permission] = useNotification();
  const strokeDasharray = (timeLeft / totalTime.current) * 283;
  const notify = (msg) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };
  if (!didInit && permission === "denied") {
    didInit = true;
    notify(
      "please allow notifications permission from the i icon in the search bar above to get notified"
    );
  }

  const changeTitle = () => {
    isRunning
      ? (document.title = `${displayTime(timeLeft)} - Focus Hub`)
      : (document.title = "Focus Hub");
  };
  changeTitle();

  const handelTimeOptionClick = (e, time) => {
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
    <section className="flex items-center justify-center flex-col ">
      <TimeOptions handelClick={handelTimeOptionClick} />
      <div className="relative">
        <DisplayTimer
          timeLeft={timeLeft}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          handelRestartClick={handelRestartClick}
          totalTime={totalTime}
        />
        <svg
          className="m-auto p-4 w-60 scale-x-[-1] pt-0"
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
