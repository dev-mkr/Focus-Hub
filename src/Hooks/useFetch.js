import { useEffect, useState } from "react";
// hook features ✨💫
/*
  fetch on page load or component get mounted agin note that 'you should pass url when you declare the hook to achieve this behavior'.
  Great for making GET request. 
  Want to make POST request or other method, have an API that require keys consider using useRequest hook <useRequest CodeSandBox LiNK>.
  unlike useRequest useFetch has a cleanup function to deal with Race condition .
  💡 don't know what is Race Conditions? see this article https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect

  you can fetch on btn click or any specific action by using setUrl for example:
  you initially fetch all posts then on btn click you call setUrl(".../posts/1").

  very performant 🚀, error indicator, loading indicator etc.
*/

const useFetch = (urlParam) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);

  const [url, setUrl] = useState(urlParam);

  useEffect(() => {
    const abortController = new AbortController();
    let data;
    //💡 making sure to call api with url
    if (url) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const resp = await fetch(url, { signal: abortController.signal });
          //💡 handel response different types
          resp.headers.get("content-type") === "application/json; charset=utf-8"
            ? (data = await resp.json())
            : (data = await resp.text());

          setApiData(data);
          if (error) {
            setError(false);
          }
        } catch (error) {
          if (error.name !== "AbortError") {
            setError(true);
            console.error(error);
          }
        }

        setIsLoading(false);
      };

      fetchData();
    }

    return () => {
      abortController.abort();
    };
  }, [url, error]);

  return [isLoading, error, apiData, setUrl];
};

export default useFetch;
