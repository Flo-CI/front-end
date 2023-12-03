import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        // Get the resource, return it as a JSON object
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((d) => {
        // Setting the data
        setData(d);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        // Catching errors
        // Set this if so that we are not updating state when it is an abort error
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log(err.message);
          setIsLoading(false);
          setError(err.message);
        }
      });

    // Stop the fetch if we quickly switch between tabs
    return () => {
      // When we abort, it throws an error
      abortCont.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
