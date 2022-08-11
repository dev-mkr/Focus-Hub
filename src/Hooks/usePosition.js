import { useState, useEffect } from "react";
// hook features ✨💫
// Get user location latitude, longitude powered by navigator.geolocation web API
// very performant 🚀 run once per app load, error indicator

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onSuccess = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    geo.getCurrentPosition(onSuccess, onError);
  }, []);

  return [position.latitude, position.longitude, error];
};
