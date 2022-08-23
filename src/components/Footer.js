import React from "react";
import { ReactComponent as MkrLogo } from "assets/mkrLogo.svg";

const Footer = () => {
  return (
    <footer className="w-full p-3 sticky md:px-0 items-center text-center bottom-0 flex justify-center flex-wrap  backdrop-blur-4xl">
      Designed and developed with
      <a href="https://github.com/dev-mkr" target="_blank" className="flex gap-x-2">
        💚 by
        <MkrLogo className="w-5 fill-current"></MkrLogo>
      </a>
    </footer>
  );
};

export default Footer;
