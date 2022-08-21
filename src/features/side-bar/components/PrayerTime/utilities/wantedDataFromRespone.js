const wantedDataFromRespone = (prayTimeData) => {
  const unWantedData = ["Firstthird", "Imsak", "Lastthird", "Midnight", "Sunset"];
  const clonedPrayTimeData = JSON.parse(prayTimeData).data.timings;

  const entrise = Object.entries(clonedPrayTimeData).filter((time) => {
    return !unWantedData.includes(time[0]);
  });
  console.log(entrise);
  const convertedDataToTimeStamp = entrise.map((el) => {
    const date = new Date(`${el[1]}`).getTime();
    return [el[0], date];
  });

  return convertedDataToTimeStamp;
};

export default wantedDataFromRespone;
