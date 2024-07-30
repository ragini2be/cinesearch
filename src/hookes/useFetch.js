import { useEffect, useState } from "react";

export  const useFetch =(apiPath, queryTerm="") => {
  const[data , setData]= useState([])
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=8659f1dbd5f33763310e990221a0ae92&query=${queryTerm}`

  useEffect(() =>{
    async function fetchmovie(){
      const response =await fetch(url)
      const json = await response.json();
      setData(json.results)
    }
    fetchmovie()
  },[url])
  return (
    {data}
  )
}
