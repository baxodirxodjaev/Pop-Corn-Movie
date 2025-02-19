import { Link } from "react-router-dom";
import { MovieListData } from "../../../types/MovieListInterface";

interface MovieProp {
  item: MovieListData;
}

const Movie = ({ item }: MovieProp) => {
  return (
    <div className=" max-w-xs md:max-w-sm lg:max-w-md flex flex-col justify-between gap-3 bg-[#1e293b] text-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-col">
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt={item.title}
          className="  object-contain shadow-2xl "
        />
        <div className="px-2 py-1">
          <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
          <span className="text-yellow-400  flex items-center justify-between">
            <p className="text-gray-400 text-sm md:text-base">
              📅 {item.release_date.slice(0, 4)}
            </p>
            ⭐ {parseFloat(item.vote_average.toFixed(1))}
          </span>
        </div>
      </div>

      <div className="w-full mb-3 px-4   ">
        <Link to={`/movie/${item.id}`}>
          <button className=" w-full bg-blue-600 px-4 py-2 text-sm rounded-lg hover:bg-blue-500 transition-all ">
            Watch Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
