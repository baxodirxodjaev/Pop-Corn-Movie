import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "./apiUrlAndKey";
import { MovieListData } from "../types/MovieListInterface";

export interface Filters {
  with_genres?: string;
  primary_release_year?: string;
  sort_by?: string;
  query?: string;
}

// const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000;

const useMovies = (filters: Filters) => {
  const [movies, setMovies] = useState<MovieListData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!page) return;

    const getMovies = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${API_URL}discover/movie`, {
          params: {
            include_adult: false,
            include_video: false,
            language: "en-US",
            page: page,
            query: filters.query || "", // if there is a query, we are searching for a movie
            sort_by: filters.sort_by || "popularity.desc",
            with_genres: filters.with_genres || "",
          },
          headers: { accept: "application/json", Authorization: API_KEY },
        });

        if (response.data.results) {
          setMovies(response.data.results);
        }
      } catch {
        setError(" Error fetching movies");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [page, filters]);

  return { movies, loading, error, setPage, page };
};

export default useMovies;
