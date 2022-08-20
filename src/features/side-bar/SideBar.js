import React from "react";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";

const SideBar = () => {
  return (
    <aside
      className="sticky left-0 top-0 h-screen bg-secondary p-5 sm:p-2.5 xl:p-5 sm:row-start-1 sm:col-start-1  grid auto-rows-auto gap-y-3.5
      [&>section]:bg-primary/50 [&>section]:rounded-lg [&>section]:shadow-md overflow-y-auto"
    >
      <React.StrictMode>
        <PomodoroTimer />
        <PomodoroTimer />
        <PomodoroTimer />
        <PomodoroTimer />
      </React.StrictMode>
    </aside>
  );
};

export default SideBar;
