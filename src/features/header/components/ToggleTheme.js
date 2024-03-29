import React from "react";
import Button from "components/Button";
import useLocalStorage from "Hooks/useLocalStorage";
import { ReactComponent as DarkThemeIcon } from "assets/darkThemeIcon.svg";
import { ReactComponent as LightThemeIcon } from "assets/lightThemeIcon.svg";
import switchon from "assets/switchon.mp3";
import switchoff from "assets/switchoff.mp3";
const ToggleTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme");

  const handelClick = () => {
    const sound = new Audio();
    sound.src = theme === "light" ? switchoff : switchon;
    sound.play();
    document.documentElement.classList.toggle(`dark-theme`);
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      onClick={handelClick}
      accessability={`Activate ${theme === "light" ? "dark" : "light"} mood`}
      className="grid items-center hover:opacity-70  p-2  focus:outline-none bg-primary  rounded-md"
    >
      {theme === "light" ? (
        <LightThemeIcon className="w-6" />
      ) : (
        <DarkThemeIcon className="w-6  text-base" />
      )}
    </Button>
  );
};

export default ToggleTheme;
