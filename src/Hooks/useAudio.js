import { useEffect, useRef, useState } from "react";

const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef(new Audio(url));
  const togglePlayback = () => setIsPlaying(!isPlaying);
  useEffect(() => {
    if (url) {
      const playPromise = audio.current.play();
      !isPlaying &&
        playPromise !== undefined &&
        playPromise
          .then(() => {
            audio.current.pause();
          })
          .catch((error) => {});
    }
  }, [url, isPlaying]);

  useEffect(() => {
    audio.current.src = url;
    url && setIsPlaying(true);
    url && audio.current.paused && audio.current.play();
  }, [url]);
  const changeVolume = (volume) => (audio.current.volume = volume);
  // useEffect(() => {
  //   audio.addEventListener("ended", () => setIsPlaying(false));
  //   return () => {
  //     audio.removeEventListener("ended", () => setIsPlaying(false));
  //   };
  // }, []);

  return [isPlaying, togglePlayback, changeVolume];
};

export default useAudio;
