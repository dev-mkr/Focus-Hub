import React from "react";
import useLocalStorage from "Hooks/useLocalStorage";
import Home from "pages/Home";
function App() {
  const [theme] = useLocalStorage("theme", "light");
  if (theme === "dark") {
    document.documentElement.classList.toggle(`dark-theme`);
  }
  return (
    <div
      className={`h-screen bg-primary text-base transition-[transition: color 350ms ease 0s, background 350ms ease 0s;]`}
    >
      <Home />
    </div>
  );
}

export default App;
