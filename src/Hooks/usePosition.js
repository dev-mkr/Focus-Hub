import { useState, useEffect } from "react";
import { toast } from "react-toastify";
// hook features ✨💫
// Get user location latitude, longitude powered by navigator.geolocation web API
// very performant 🚀 run once per app load, error indicator

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const notify = (msg) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };
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
        notify(
          "Please allow Location permission from the i icon in the search bar above"
        );
      }
    });
  }, []);

  return [position.latitude, position.longitude, error];
};
export default usePosition;
