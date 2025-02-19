import { useState } from "react";
import useMovies from "../../../fetchAPI_Hooks/useMovies";
import Loading from "../../loader/Loading";
import Pagination from "../../pagination/Pagination";
import Movie from "./Movie";
import Movie_Filter from "../../Filter/MovieFilter";

const MovieList = () => {
  const [filters, setFilters] = useState({});
  const { movies, page, setPage, error, loading } = useMovies(filters);

  if (error) return <h1 className="text-red-400 text-xl font-mono">{error}</h1>;
  if (loading) return <Loading />;

  return (
    <>
      <Movie_Filter onFilterChange={setFilters} />
      <h2 className="text-3xl font-bold text-white mb-4">🎬 Popular movies</h2>

      <div className="p-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies && movies.map((item) => <Movie key={item.title} item={item} />)}
      </div>

      {/* Page navigation */}
      <Pagination>
        <div className="flex justify-center gap-4 mt-6 mb-4">
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            ⬅️ Prev
          </button>
          <span className="text-lg font-semibold">Page: {page}</span>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next ➡️
          </button>
        </div>
      </Pagination>
    </>
  );
};

export default MovieList;
