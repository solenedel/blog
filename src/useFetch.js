import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    fetch(url) // get request
    .then(res => {
      if (!res.ok) throw Error('could not fetch the data for that resource');

      return res.json(); // parse JSON into JS object
    })
    .then(data => {
      console.log(data);
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setIsLoading(false);
    })
  }, [url]);

  return {data, isLoading, error};
};

export default useFetch;