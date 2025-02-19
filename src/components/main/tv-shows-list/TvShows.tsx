import { Link } from "react-router-dom";
import { TV_Show } from "../../../types/TVShowInterface";

interface TvShowProp {
  show: TV_Show;
}

const TvShows = ({ show }: TvShowProp) => {
  return (
    <Link
      key={show.id}
      to={`/tv/${show.id}`}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform max-w-[200px]"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
        alt={show.name}
        className="w-full "
      />
      <p className="text-center text-white font-medium py-3">{show.name}</p>
      <span className="flex items-center justify-between px-6">
        <p className="text-center text-gray-400 text-sm">
          📅 {show.first_air_date.slice(0, 4)}
        </p>
        <p>⭐ {show.vote_average.toFixed(1)}</p>
      </span>
    </Link>
  );
};

export default TvShows;
