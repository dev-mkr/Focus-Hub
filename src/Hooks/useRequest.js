import { useState } from "react";
// hook features ✨💫
/* 
  Only fetch when callApi function get called, best choice for make request on btn click or any specific action.
  Great for making HTTP request with any method.
  you can use it to fetch data with POST request for example: apis that require api key but be careful, 
  🛑 useRequest doesn't have a cleanup function to deal with Race condition so use it wisely.
  💡 Don't know what is Race Conditions? see this article https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect

  You can't fetch on page load or component get mounted if you want this behavior you can implement it that way ex:👇🏼

  const component = () =>{
    ...
    const [isLoading, error, quote, callApi] = useRequest();
    fetch on page load or component mounted or component rerender ✅
    callApi(`https://motivational-quotes1.p.rapidapi.com/motivation`, "POST");
    ...
    return <SomeJsx />
  }
  
  or consider using useFetch hook <useFetch CodeSandBox LiNK>.

  Best choice for making request once per app load, by declare a higher variable with "false" in the component and then change it see the example 👇🏼:
  
  let didInit = false;
  const Quote = () => {
    ...
    const [isLoading, error, Quote, fetch] = useRequest();
    if (!didInit) {
      // 💡 Only runs once per app load ✅
      didInit = true;
      callApi(`https://motivational-quotes1.p.rapidapi.com/motivation`, "POST", {
        "content-type": "application/json",
        "X-RapidAPI-Key": <API key>,
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
      });
    }
    ...
  return <SomeJsx />
  }

  very customizable, very performant 🚀, error indicator, loading indicator etc.
*/

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setRespone] = useState();
  const [error, setError] = useState(false);

  const callApi = async (url, method, headers, body) => {
    let data;
    setIsLoading(true);

    console.log("api called");

    try {
      const resp = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      });
      //💡 handel response that not type of JSON
      resp.headers.get("content-type") === "application/json; charset=utf-8"
        ? (data = await resp.json())
        : (data = await resp.text());

      setRespone(data);
      if (error) {
        setError(false);
      }
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  return [isLoading, error, response, callApi];
};

export default useRequest;
