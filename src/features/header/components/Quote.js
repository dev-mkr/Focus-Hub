import React from "react";
import useRequest from "Hooks/useRequest";
let didInit = false;
const Quote = () => {
  const [isLoading, error, quote, callApi] = useRequest();

  if (!didInit) {
    // 💡 Only runs once per app load ✅
    didInit = true;
    callApi(`https://motivational-quotes1.p.rapidapi.com/motivation`, "POST", {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a8194c7eeamsh856f778768088abp1e1f21jsncf54e0e498a9",
      "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
    });
  }

  return (
    <blockquote className="p-3 ml-3 bg-primary/50 font-semibold text-base/70 text-lg shadow-md rounded-xl">
      {isLoading ? "Loading..." : error ? error : quote}
    </blockquote>
  );
};
export default Quote;
