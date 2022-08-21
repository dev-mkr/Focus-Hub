import React from "react";
import wantedDataFromRespone from "../utilities/wantedDataFromRespone";

const PrayTimeHeader = ({ prayTimeData }) => {
  const prayData = wantedDataFromRespone(prayTimeData);
  console.log(prayData);
  const timeNow = new Date().getTime();
  const nextPray = prayData.find((time) => timeNow < time[1]);
  console.log(nextPray);
  debugger;
  const nextPrayDate = new Date(nextPray[1]);
  const hours = nextPrayDate.getHours();

  return (
    <header>
      {nextPray[0]}
      <span>{`${hours > 12 ? hours - 12 : hours}:${nextPrayDate.getMinutes()} ${
        hours > 12 ? "Pm" : "Am"
      }`}</span>
    </header>
  );
};

export default PrayTimeHeader;
