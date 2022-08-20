import React from "react";
import useLocalStorage from "Hooks/useLocalStorage";
import Home from "pages/Home";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
