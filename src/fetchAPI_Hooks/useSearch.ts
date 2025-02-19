import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "./apiUrlAndKey";



interface SearchResults {
  id: number;
  title?: string; 
  name?: string; 
  poster_path: string;
  media_type: "movie" | "tv"; 
  release_date?: string;
  first_air_date?: string;
}

const useSearch = (query: string) => {
  const [results, setResults] = useState<SearchResults[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  console.log(results);
  

  useEffect(() => {
    if (!query) {
      setResults(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        //  making 2 requests to the API
        const [moviesResponse, tvResponse] = await Promise.all([
          axios.get(`${API_URL}search/movie`, {
            params: { query, include_adult: false, language: "en-US", page: 1 },
            headers: { accept: "application/json", Authorization: API_KEY },
          }),
          axios.get(`${API_URL}search/tv`, {
            params: { query, include_adult: false, language: "en-US", page: 1 },
            headers: { accept: "application/json", Authorization: API_KEY },
          }),
        ]);

        // combined tv and movie results
        const combinedResults = [
          ...moviesResponse.data.results.map((item: SearchResults) => ({ ...item, media_type: "movie" })),
          ...tvResponse.data.results.map((item: SearchResults) => ({ ...item, media_type: "tv" })),
        ];

        console.log(combinedResults);
        
        setResults(combinedResults);
      } catch {
        setError(" Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { results, loading, error,setResults  };
};

export default useSearch;
