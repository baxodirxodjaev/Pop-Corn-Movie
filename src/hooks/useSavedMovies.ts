import { useState, useEffect } from "react";
import { Saved_Movie } from "../types/SavedMovieInterface";

export const useSavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState<Saved_Movie[]>([]);
  const [savedTVShows, setSavedTVShows] = useState<Saved_Movie[]>([]);

  useEffect(() => {
    const storedMovies = JSON.parse(
      localStorage.getItem("savedMovies") || "[]"
    );
    const storedTVShows = JSON.parse(
      localStorage.getItem("savedTVShows") || "[]"
    );
    setSavedMovies(storedMovies ?? []);
    setSavedTVShows(storedTVShows ?? []);
  }, []);

  const addMovie = (newMovie: Saved_Movie, type: string) => {
    // Adding only Movies with type "movie"
    if (type === "movie") {
      if (savedMovies?.some((item) => item.id === newMovie.id)) {
        return alert(`"${newMovie.title}" is already saved!`);
      }

      const updatedMovies = [...savedMovies, newMovie];
      setSavedMovies(updatedMovies);
      localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));

      alert(`"${newMovie.title}" is added!`);
    }

    //  Adding only TV Shows with type "tv"
    if (type === "tv") {
      if (savedTVShows?.some((item) => item.id === newMovie.id)) {
        return alert(`"${newMovie.title}" is already saved!`);
      }

      const updatedTVShows = [...savedTVShows, newMovie];
      setSavedTVShows(updatedTVShows);
      localStorage.setItem("savedTVShows", JSON.stringify(updatedTVShows));

      alert(`"${newMovie.title}" is added!`);
    }
  };

  const removeMovie = (movieId: number | undefined, type: string) => {
    // Removing only Movies with type "movie"
    if (type === "movie") {
      const updatedMovies = savedMovies.filter((item) => item.id !== movieId);
      setSavedMovies(updatedMovies);
      localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
    }

    //   Removing only TV Shows with type "tv"
    if (type === "tv") {
      const updatedTVShows = savedTVShows.filter((item) => item.id !== movieId);
      setSavedTVShows(updatedTVShows);
      localStorage.setItem("savedTVShows", JSON.stringify(updatedTVShows));
    }
  };

  return { savedMovies, addMovie, removeMovie, savedTVShows };
};
