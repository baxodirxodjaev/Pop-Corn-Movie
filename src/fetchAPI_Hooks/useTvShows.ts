import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "./apiUrlAndKey";
import { TV_Show } from "../types/TVShowInterface";

const useTVShows = () => {
  const [tvShows, setTVShows] = useState<TV_Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getTVShows = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}discover/tv`, {
          params: {
            include_adult: false,
            include_null_first_air_dates: false,
            language: "en-US",
            page: page,
            sort_by: "vote_count.desc",
          },
          headers: { accept: "application/json", Authorization: API_KEY },
        });

        if (response.data.results) {
          setTVShows(response.data.results);
        }
      } catch {
        setError(" Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    getTVShows();
  }, [page]);

  return { tvShows, loading, error, setPage, page };
};

export default useTVShows;
