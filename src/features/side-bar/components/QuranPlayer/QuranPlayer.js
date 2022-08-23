import React, { useState } from "react";
import quranRadioUrls from "data/quranRadioUrls.json";
import useAudio from "Hooks/useAudio";
import ReciterList from "./components/RecitersList";
import PlayerOptions from "./components/PlayerOptions";

const QuranPlayer = () => {
  const [reciter, setReciter] = useState();
  const [isPlaying, togglePlayback, changeVolume] = useAudio(reciter?.url);
  return (
    <section className="relative h-[22rem] overflow-hidden">
      <ReciterList quranRadioUrls={quranRadioUrls} setReciter={setReciter} />
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
