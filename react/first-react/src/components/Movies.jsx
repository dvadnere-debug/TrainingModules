import { useEffect } from "react";
import axios from "axios";
export const Movie = () => {
  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // const res = await axios.get(API)

  useEffect(() => {
    getMovieData();
  }, []);
  return <h1>Movies</h1>;
};
