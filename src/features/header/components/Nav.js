import React from "react";
import ToggleTheme from "./ToggleTheme";
import { ReactComponent as AppLogo } from "../../../assets/appLogo.svg";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1
        aria-label="Logo"
        title="Logo"
        className="flex justify-between items-center text-2xl sm:text-3xl font-bold"
      >
        <AppLogo className="w-10 " /> Focus Hup
      </h1>
      <ToggleTheme />
    </nav>
  );
};

export default Nav;
