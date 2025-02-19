import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./apiUrlAndKey";


const API_URL = "https://api.themoviedb.org/3/";

const useFetchMovieData = <T> (id: string | undefined , type: "movie" | "actor") => {
  const [data, setData] = useState <T | null> (null );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);


  
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {

        // Loading data from local Storage
        const moviesCache = JSON.parse(localStorage.getItem("movieDetails") || "{}");
        const actorsCache = JSON.parse(localStorage.getItem("actors") || "{}");

        // If there is any data in the local storage then use it
        if (type === "movie" && moviesCache[id]) {

          setData(moviesCache[id] as T );
          setIsLoading(false);
          return;
        }
        if (type === "actor" && actorsCache[id]) {

          setData(actorsCache[id] as T);
          setIsLoading(false);
          return;
        }

        //  Making url request according to the type
        const url =
          type === "movie"
            ? `${API_URL}movie/${id}?language=en-US&append_to_response=videos,images,credits,similar,reviews&include_image_language=null,en`
            : `${API_URL}person/${id}?language=en-US&append_to_response=movie_credits,images`;

        const response = await axios.get(url, {
          headers: { accept: "application/json", Authorization: API_KEY },
        });

        if (response.data) {
          setData(response.data as T);

          // Update cache
          if (type === "movie") {
            moviesCache[id] = response.data;
            localStorage.setItem("movieDetails", JSON.stringify(moviesCache));
          } else {
            actorsCache[id] = response.data;
            localStorage.setItem("actors", JSON.stringify(actorsCache));
          }
        }
      } catch (readError) {
        setIsError(` ${readError}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  return { data, isLoading, isError };
};

export default useFetchMovieData;


