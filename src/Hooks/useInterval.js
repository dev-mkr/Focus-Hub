import React from "react";

const useInterval = () => {
  var output = document.getElementById("h1");
  var isPaused = false;
  var time = 0;
  var t = setInterval(function () {
    if (!isPaused) {
      time++;
      output.innerText = "Seconds: " + time;
    }
  }, 1000);
  function play() {
    isPaused = false;
  }
  function pause() {
    isPaused = true;
  }
  return <div>useInterval</div>;
};

export default useInterval;
