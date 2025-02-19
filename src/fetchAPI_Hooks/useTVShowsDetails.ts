import { useState, useEffect } from "react";
import axios from "axios";
import { TVShowDetails } from "../types/TVShowInterface";
import { API_KEY, API_URL_TV_SHOW } from "./apiUrlAndKey";

const useTVShowDetails = (id: string | undefined) => {
  const [tvShow, setTVShow] = useState<TVShowDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log(tvShow);

  useEffect(() => {
    if (!id) return;

    const getTVShowDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL_TV_SHOW}${id}?&include_image_language=null,en`,
          {
            params: {
              language: "en-US",
              append_to_response: "credits,images,reviews,videos,similar",
            },
            headers: { accept: "application/json", Authorization: API_KEY },
          }
        );

        if (response.data) {
          setTVShow(response.data);
        }
      } catch {
        setError(" Error fetching TV show details");
      } finally {
        setLoading(false);
      }
    };

    getTVShowDetails();
  }, [id]);

  return { tvShow, loading, error };
};

export default useTVShowDetails;
