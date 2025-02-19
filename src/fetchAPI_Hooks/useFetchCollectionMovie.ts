import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL_COLLECTION } from "./apiUrlAndKey";



interface Collection {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  parts: { 
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  }[];
}

const useFetchCollection = (collectionId: string | undefined) => {
  const [data, setData] = useState<Collection | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);
 

  useEffect(() => {
    if (!collectionId) return;

    const fetchCollection = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL_COLLECTION}${collectionId}`, {
          headers: { accept: "application/json", Authorization: API_KEY },
        });

        if (response.data) {
          setData(response.data);
          console.log(response.data);
          
        }
      } catch (err) {
        setIsError(`This movie collection does not exist ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollection();
  }, [collectionId]);

  return { data, isLoading, isError };
};

export default useFetchCollection;
