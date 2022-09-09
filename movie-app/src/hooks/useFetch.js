import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  //const [page, setPage] =useState(1)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch(url);
      console.log("useFetch response --> ", response);
      const result = await response.json();
      console.log("result", result);
      setData(result.results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  // const handleScroll=() => {
  //   console.log("Height:",document.documentElement.scrollHeight);
  //   console.log("Top:",document.documentElement.scrollTop);
  //   console.log("Window",window.innerHeight);

  //   if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
  //     setPage(prev => prev+1);
  //   }
  // }

  useEffect(() => {
    //window.addEventListener("scroll", handleScroll);
    //return() => window.removeEventListener("scroll",handleScroll);
    getData();
  }, [url]);
  return { data, error, loading,};
};
export default useFetch;
