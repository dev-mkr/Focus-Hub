import React from "react";
import useRequest from "../../../Hooks/useRequest";
import { usePosition } from "../../../Hooks/usePosition";
import { ReactComponent as LocationIcon } from "../../../assets/locationIcon.svg";

let didInit = false;
const WetherWidget = () => {
  const [latitude, longitude, geoError] = usePosition();
  const [isLoading, error, weatherData, fetch] = useRequest();
  console.log({ isLoading, error, weatherData });
  //making use of component rerender 👇🏼.
  //in the initial render latitude and longitude will be undefined then the usePosition hook well cause rerender so we don't need useEffect
  if (!didInit) {
    // 💡 Only runs once per app load ✅
    if (latitude && longitude) {
      didInit = true;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=524252a7f1ed7c1dc1ba57581cc3ed1e&units=metric`,
        "GET"
      );
    }
  }

  const iconPath = process.env.PUBLIC_URL + "/wetherIcons/";
  return (
    <div
      className={`flex justify-around items-center  ${
        !isLoading && weatherData.main.temp < 20
          ? "blueGradient"
          : "bg-gradient-to-r from-[#FF512F] to-[#DD2476]"
      } rounded-xl p-2 max-w-sm  text-white flex-wrap`}
    >
      {geoError ? (
        geoError === 'User denied Geolocation' ? 'Please allow access to the location then refresh the page.' : geoError
      ) : isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <>
          <p
            className="flex justify-center items-center gap-x-1.5 font-bold text-xl basis-full "
            aria-label="Location"
            title="Location"
          >
            <LocationIcon />
            {weatherData.name}, {weatherData.sys.country}
          </p>
          <div>
            <img
              className="w-24"
              src={`${iconPath}${weatherData.weather[0].icon}.svg`}
              alt="Wether condition icon"
              aria-label="Wether condition icon"
              title="Wether condition icon"
            />
            <p>
              {weatherData.weather[0].main}-{weatherData.weather[0].description}
            </p>
          </div>

          <div className="flex flex-col gap-y-2  text-xs ">
            <h4 className="text-5xl font-bold ">{weatherData.main.temp}°C</h4>
            <div>
              <p>Feels like: {weatherData.main.feels_like}°C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WetherWidget;
