import usePosition from "Hooks/usePosition";
import useRequest from "Hooks/useRequest";
import { toast } from "react-toastify";
import React from "react";
import PrayerTimeTable from "./components/PrayTimeTable";
import PrayTimeHeader from "./components/PrayTimeHeader";
let didInit = false;
let showToast = false;
const PrayerTime = () => {
  const [latitude, longitude, geoError] = usePosition();
  const [isLoading, error, responseData, fetch] = useRequest();
  const notify = (msg, show) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    showToast = show;
  };
  if (!didInit) {
    // 💡 Only runs once per app load ✅
    if (latitude && longitude) {
      didInit = true;
      fetch(
        `http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&iso8601=true`,
        "GET"
      );
    }
  }

  return (
    <section>
      {geoError &&
        !showToast &&
        notify(
          "please allow Location permission from the i icon in the search bar above to get notified",
          true
        )}
      {isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <>
          <PrayTimeHeader prayTimeData={responseData} />
          <PrayerTimeTable prayTimeData={responseData} />
        </>
      )}
    </section>
  );
};

export default PrayerTime;
