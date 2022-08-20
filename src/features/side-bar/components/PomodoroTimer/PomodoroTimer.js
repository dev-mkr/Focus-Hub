import React, { useRef, useState } from "react";
import useInterval from "Hooks/useInterval";
import PomodoroComponent from "./components/PomodoroComponent";
import { getRandomBreakQuote, getRandomMotivateQuote } from "data/quotes";
import useNotification from "Hooks/useNotification";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [showNotification] = useNotification();

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
        totalTime.current === 1500 && showNotification("Finished 🥳", getRandomBreakQuote());
        totalTime.current <= 900 && showNotification("Time to work", getRandomMotivateQuote());
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
