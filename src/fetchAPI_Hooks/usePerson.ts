


import { useState, useEffect } from 'react';
import { Person } from '../types/PersonInterface';
import axios from 'axios';
import { API_KEY, API_URL_PERSON } from './apiUrlAndKey';

const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(() => {

    const getPeople = async () => {
      setLoading(true);
      setError(null);

      try {
       const response = await axios.get(`${API_URL_PERSON}popular?` , {
        params: {
            adult : false,
            page: 1,
        },
        headers : {accept: "application/json", Authorization: API_KEY }
       });

       if(response.data.results){
        setPeople(response.data.results);
        
       }
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    getPeople();
  }, []);

  return { people, loading, error };
};

export default usePeople;