function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  return `Be Back At ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

export default displayEndTime;
