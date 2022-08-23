import WetherWidget from "./components/WetherWidget";
import React from "react";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import QuranPlayer from "./components/QuranPlayer/QuranPlayer";
import Footer from "components/Footer";
// import PrayerTime from "./components/PrayerTime/PrayerTime";

const SideBar = () => {
  return (
    <aside
      className="pt-5 sticky left-0 top-0 h-screen bg-secondary [&>section]:mx-4  sm:row-start-1 sm:col-start-1  grid auto-rows-auto gap-y-3.5
      [&>section]:bg-primary/50 [&>section]:rounded-lg [&>section]:shadow-md overflow-y-auto"
    >
      <PomodoroTimer />
      {/* <PrayerTime /> suspended */}
      <QuranPlayer />
      <WetherWidget />
      <Footer />
    </aside>
  );
};

export default SideBar;
