import React from "react";
import SideBar from "features/side-bar/SideBar";
import Kanban from "features/kanban-board/Kanban";
import Header from "features/header/Header";
function Home() {
  return (
    <main className="grid sm:grid-cols-[300px_2fr] xl:grid-cols-[1fr_3.5fr] grid-row-2 relative">
      <section className="grid grid-rows-[auto_1fr]">
        <Header />
        <Kanban />
      </section>
      <SideBar />
    </main>
  );
}

export default Home;
