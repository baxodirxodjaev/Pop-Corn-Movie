import { useState } from "react";
import { Filters } from "../../fetchAPI_Hooks/useMovies";

interface Genre {
  id: number;
  name: string;
}

const genresList: Genre[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const Movie_Filter = ({
  onFilterChange,
}: {
  onFilterChange: (filters: Filters) => void;
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popularity.desc");

  const handleGenreChange = (genreId: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const applyFilters = () => {
    onFilterChange({
      with_genres: selectedGenres.join(","),
      primary_release_year: releaseDate,
      sort_by: sortBy,
    });
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Filters</h3>

      {/* Genres filter */}
      <div className="mb-3">
        <h4 className="font-medium mb-1">Genres:</h4>
        <div className="grid grid-cols-3 gap-2">
          {genresList.map((genre) => (
            <button
              key={genre.id}
              onClick={() => handleGenreChange(genre.id.toString())}
              className={`px-2 py-1 rounded-md text-sm ${
                selectedGenres.includes(genre.id.toString())
                  ? "bg-indigo-500"
                  : "bg-gray-700"
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>

      {/* Release filter */}
      <div className="mb-3">
        <h4 className="font-medium mb-1">Release year:</h4>
        <input
          type="number"
          value={releaseDate}
          onChange={(e) => {
            const year = e.target.value;
            if (year.length > 4) return;
            setReleaseDate(year);
          }}
          min="1900"
          max="2025"
          placeholder="Year"
          className=" px-3 py-1 rounded-md bg-gray-700 text-white text-center"
        />
      </div>

      {/* Sort by filter */}
      <div className="mb-3">
        <h4 className="font-medium mb-1">Sort by:</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-1 rounded-md bg-gray-700 text-white"
        >
          <option value="popularity.desc">Populatity (desc.)</option>
          <option value="popularity.asc">Populatity (asc.)</option>
          <option value="release_date.desc">Release date (desc.)</option>
          <option value="release_date.asc">Release date (asc.)</option>
          <option value="vote_average.desc">Vote average (desc.)</option>
          <option value="vote_average.asc">Vote average (asc.)</option>
        </select>
      </div>

      {/* Submit */}

      <button
        onClick={applyFilters}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-md transition"
      >
        Submit filters
      </button>
    </div>
  );
};

export default Movie_Filter;
