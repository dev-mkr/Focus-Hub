import React from "react";
import Nav from "./components/Nav";
import Quote from "./components/Quote";
import WetherWidget from "./components/WetherWidget";

const Header = () => {
  return (
    <header className="px-5 sm:pl-0 sm:pr-3 pb-5 pt-2  bg-secondary grid grid-rows-[auto_1fr]  gap-y-3 min-h-[7.5rem] ">
      <Nav />
      <section className="pl-2 grid sm:grid-cols-[2fr_1fr] gap-4 ">
        <Quote />
        <WetherWidget />
      </section>
    </header>
  );
};

export default Header;
