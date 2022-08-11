import React from "react";
import useRequest from "../../../Hooks/useRequest";
import { usePosition } from "../../../Hooks/usePosition";
import { ReactComponent as LocationIcon } from "../../../assets/locationIcon.svg";

let didInit = false;
const WetherWidget = () => {
  const [latitude, longitude, geoError] = usePosition();
  // const [isLoading, error, weatherData, fetch] = useRequest();
  console.log(weatherData);
  //making use of component rerender 👇🏼.
  //in the initial render latitude and longitude will be undefined then the usePosition hook well cause rerender so we don't need useEffect
  // if (!didInit) {
  //   // 💡 Only runs once per app load ✅
  //   if (latitude && longitude) {
  //     didInit = true;
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=524252a7f1ed7c1dc1ba57581cc3ed1e&units=metric`,
  //       "GET"
  //     );
  //   }
  // }
  const weatherData = {
    coord: {
      lon: 31.1825,
      lat: 30.0161,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 18,
      feels_like: 35.2,
      temp_min: 33.43,
      temp_max: 33.43,
      pressure: 1008,
      humidity: 43,
      sea_level: 1008,
      grnd_level: 1005,
    },
    visibility: 10000,
    wind: {
      speed: 7.75,
      deg: 26,
      gust: 9.15,
    },
    clouds: {
      all: 0,
    },
    dt: 1660067088,
    sys: {
      type: 1,
      id: 2514,
      country: "EG",
      sunrise: 1660015136,
      sunset: 1660063367,
    },
    timezone: 7200,
    id: 360995,
    name: "Giza",
    cod: 200,
  };
  const iconPath = process.env.PUBLIC_URL + "/wetherIcons/";
  return (
    <div
      className={`flex justify-around items-center bg-gradient-to-r ${
        weatherData.main.temp < 20 ? "blueGradient" : "from-[#FF512F] to-[#DD2476]"
      } rounded-xl p-2 max-w-sm  text-white flex-wrap`}
    >
      {/* {geoError ? (
        geoError
      ) : isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : ( */}
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

        <div className="flex flex-col gap-x-2  text-xs ">
          <h4 className="text-5xl font-bold ">{weatherData.main.temp}°C</h4>
          <div>
            <p>Feels like: {weatherData.main.feels_like}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default WetherWidget;
