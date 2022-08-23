import React from "react";
import Button from "components/Button";
const TimeOptions = ({ handelClick }) => {
  return (
    <header className="w-full p-3 flex justify-center gap-x-1.5 text-sm font-semibold [&>button]:whitespace-nowrap time-options ">
      <Button onClick={(e) => handelClick(e, 1500)} className="opacity-1">
        Pomodoro
      </Button>
      <Button onClick={(e) => handelClick(e, 300)}>Short Break</Button>
      <Button onClick={(e) => handelClick(e, 900)}>Long Break</Button>
    </header>
  );
};

export default TimeOptions;
