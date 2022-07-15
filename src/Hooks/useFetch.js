import { useEffect, useState } from "react";

const useFetch = (method, urlParam, body) => {
  let isCanceled = false;

  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [url, setUrl] = useState(urlParam); // if we want to fetch at specifec tiem on submet for exampel

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetch({
          method: method,
          url: url,
          data: body,
        });
        const data = await resp?.data;
        if (!isCanceled) {
          console.log(data);
          setApiData(data);
          setIsLoading(false);
        }
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      isCanceled = true;
    };
  }, [url, method, JSON.stringify(body)]);

  return [{ isLoading, apiData, serverError }, { setUrl }];
};

export default useFetch;
