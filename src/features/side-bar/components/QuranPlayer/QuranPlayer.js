import React, { useState, Suspense, lazy } from "react";
import useAudio from "Hooks/useAudio";
import PlayerOptions from "./components/PlayerOptions";
const RecitersList = lazy(() => import("./components/RecitersList"));

const QuranPlayer = () => {
  const [reciter, setReciter] = useState();
  const [isPlaying, togglePlayback, changeVolume] = useAudio(reciter?.url);

  return (
    <section className="relative h-[22rem] overflow-hidden">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <RecitersList setReciter={setReciter} />
      </Suspense>
      <PlayerOptions
        togglePlayback={togglePlayback}
        reciterUrl={reciter?.url}
        isPlaying={isPlaying}
        reciterName={reciter?.name}
        changeVolume={changeVolume}
      />
    </section>
  );
};

export default React.memo(QuranPlayer);
