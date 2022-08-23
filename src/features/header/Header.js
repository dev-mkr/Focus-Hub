import React from "react";
import Nav from "./components/Nav";
import Quote from "./components/Quote";

const Header = () => {
  return (
    <header className="px-5 sm:pl-0 sm:pr-3 pb-5 pt-2  bg-secondary grid grid-rows-[auto_1fr]  gap-y-3 min-h-[7.5rem] ">
      <Nav />
      <Quote />
    </header>
  );
};

export default Header;
