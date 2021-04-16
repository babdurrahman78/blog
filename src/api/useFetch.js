import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Data tidak ditemukan");
          }
          return res.json();
        })
        .then((data) => {
            if(mounted){
                setData(data);
                setIsPending(false);
            }
        })
        .catch((err) => {
            if(mounted){
                setError(err.message);
                setIsPending(false);
            }
        });

    return function cleanUp(){
        mounted = false;
    }
  }, [url]);

  return { data, setData, isPending, error}
};

// npx json-server --watch data/db.json --port 8000

export default useFetch;

