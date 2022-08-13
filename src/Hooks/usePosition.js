import { useState, useEffect } from "react";
// hook features ✨💫
// Get user location latitude, longitude powered by navigator.geolocation web API
// very performant 🚀 run once per app load, error indicator

const usePosition = () => {
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
    }
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        geo.getCurrentPosition(onSuccess, onError);
      } else {
        setError("User denied Geolocation");
      }
    });
  }, []);

  return [position.latitude, position.longitude, error];
};
export default usePosition;
