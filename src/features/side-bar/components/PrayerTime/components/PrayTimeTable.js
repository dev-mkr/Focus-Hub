import React from "react";
import wantedDataFromRespone from "../utilities/wantedDataFromRespone";
const PrayTimeTable = ({ prayTimeData }) => {
  const prayData = wantedDataFromRespone(prayTimeData);
  const dataLi = prayData.map((pray) => {
    const date = new Date(pray[1]);
    const hours = date.getHours();
    return (
      <li key={pray[0]} className="flex justify-between font-semibold">
        <span>{pray[0]}</span>
        <span>{`${hours > 12 ? hours - 12 : hours}:${date.getMinutes()} ${
          hours > 12 ? "Pm" : "Am"
        }`}</span>
      </li>
    );
  });
  return <ul className="flex flex-col p-4 gap-y-2">{dataLi}</ul>;
};

export default PrayTimeTable;
