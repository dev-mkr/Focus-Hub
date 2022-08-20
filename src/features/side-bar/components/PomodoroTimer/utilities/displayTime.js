const displayTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainSeconds = seconds % 60;
  const display = `${minutes}:${remainSeconds < 10 ? "0" : ""}${remainSeconds}`;

  return display;
};

export default displayTime;
