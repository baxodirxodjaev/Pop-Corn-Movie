



import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL_HERO_SLIDER } from "./apiUrlAndKey";



interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

const useFetchNowPlaying = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL_HERO_SLIDER}`, {
          headers: { accept: "application/json", Authorization: API_KEY },
        });

        if (response.data.results) {
            setMoviesNowPlaying(response.data.results);
        }
      } catch (readError) {
        setIsError(`${readError}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { moviesNowPlaying, isLoading, isError };
};

export default useFetchNowPlaying;
