import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import useSearch from "../fetchAPI_Hooks/useSearch";
import { SearchContext } from "../hooks/SearchContxt";

const SearchResults = () => {
  const { searchQuery, } = useContext(SearchContext) || {};
  const { results, loading, error,  } = useSearch(searchQuery || "");
  const navigate = useNavigate()

  const handleChosenItem =(id : number, type: string) => {
      navigate (`/${type}/${id}`)
  }

  return (
    <div className="p-6 container mx-auto ">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
 
      <h1 className=" text-xl text-gray-200 font-bold">Search Results:</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {results?.map((item) => (
          <div
            
            onClick={()=>handleChosenItem(item.id , item.media_type)}
            key={item.id}
            // to={
            //   item.media_type === "movie"
            //     ? `/movie/${item.id}`
            //     : `/tv/${item.id}`
            // }
            className="max-w-[300px] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title || item.name}
              className="w-full h-64 "
            />
            <p className="text-center text-white font-medium py-3">
              {item.title || item.name} (
              {item.media_type === "movie" ? "🎬 Movie" : "📺 Tv show"})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
