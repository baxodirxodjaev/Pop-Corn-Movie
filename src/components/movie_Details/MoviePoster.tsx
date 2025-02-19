import {  useSavedMovies } from "../../hooks/useSavedMovies";
import StarRating from "../rating/StarRating";

interface PosterProp {
  poster_path: string | undefined;
  title: string |undefined;
  vote_average: number | undefined;
  vote_count: number | undefined;
  movie_id: number | undefined;
}

const MoviePoster = ({
  poster_path,
  title,
  vote_average,
  vote_count,
  movie_id,
}: PosterProp) => {

  const saved = { poster_path: poster_path, title: title, id: movie_id, type : "movie" };
  
  

  const { savedMovies, addMovie  } = useSavedMovies();
 
  

  const isSaved = savedMovies?.some((item)=> item.id === movie_id);

  return (
    <div className="w-[300px] flex flex-col items-center   box-border">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-96 object-cover rounded-lg shadow-xl mb-4 "
      />
      <StarRating vote_average={Number(vote_average?.toFixed(1))} />
      <span className="w-full flex justify-between items-start mt-3">
        <p className="font-light text-gray-300 underline">
          votes: {vote_count }
        </p>
        <button 
          onClick={() => addMovie(saved, 'movie')} className="cursor-pointer">
          <i className={` ${isSaved ? 'text-yellow-500' : ''} bi bi-bookmark-fill text-[30px]`}></i>
        </button>
      </span>
    </div>
  );
};

export default MoviePoster;
