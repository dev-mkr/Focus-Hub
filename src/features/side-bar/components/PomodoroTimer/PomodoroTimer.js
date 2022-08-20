import React, { useRef, useState } from "react";
import useInterval from "Hooks/useInterval";
import PomodoroComponent from "./components/PomodoroComponent";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const now = Date.now();
  const then = now + timeLeft * 1000;
  const totalTime = useRef(timeLeft);
  useInterval(
    () => {
      setTimeLeft(Math.round((then - Date.now()) / 1000));
    },
    isRunning ? 1000 : null
  );
  useInterval(
    () => {
      if (Math.round((then - Date.now()) / 1000) <= 0) {
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null
  );

  return (
    <>
      <PomodoroComponent
        timeLeft={timeLeft}
        totalTime={totalTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setTimeLeft={setTimeLeft}
      />
    </>
  );
};

export default PomodoroTimer;
