import { Link } from "react-router-dom";
import SliderComponent from "../slider/SliderComponent";
import { Credits } from "../../types/MovieInterface";

interface MovieActorProp {
  movie_credits: Credits | undefined;
}

const MovieActors = ({ movie_credits }: MovieActorProp) => {
  return (
    <>
      <div className="py-6 px-8 w-full">
        <h3 className="text-xl text-start font-semibold mt-6">Actors:</h3>
        <SliderComponent
          classname="px-2"
          items={movie_credits?.cast?.slice(0, 9)}
          renderItem={(actor) => (
            <div className="flex-none w-[120px] sm:w-[150px] text-center">
              <Link to={`/actor/${actor?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor?.profile_path}`}
                  className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg shadow-lg"
                  alt={actor?.name}
                />
                <p className="text-xs sm:text-sm mt-2 font-medium">
                  {actor?.name}
                </p>
                <p className="font-light text-xs">{actor?.character}</p>
              </Link>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default MovieActors;
