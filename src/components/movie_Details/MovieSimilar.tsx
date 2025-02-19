import { Link } from "react-router-dom";
import SliderComponent from "../slider/SliderComponent";
import { Similar } from "../../types/MovieInterface";

interface Movie_Similar_Prop {
  movie_similar: Similar | undefined;
}

const MovieSimilar = ({ movie_similar }: Movie_Similar_Prop) => {
  return (
    <div className="py-6 px-8 w-full">
      <h3 className="text-2xl text-start font-semibold mt-6">
        Similar movies:
      </h3>
      {movie_similar?.results.length !== 0 ? (
        <SliderComponent
          classname=""
          settings={{
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            speed: 500,
            responsive: [
              {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 2 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 3, slidesToScroll: 1 },
              },
              {
                breakpoint: 480,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
              },
            ],
          }}
          items={movie_similar?.results?.slice(0, 8)}
          renderItem={(similar?) => (
            <div className="flex-none w-[120px] sm:w-[280px] text-center sm:space-x-4  ">
              <Link to={`/movie/${similar?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${similar?.poster_path}`}
                  className="w-full h-[180px] sm:h-[300px] object-contain rounded-lg shadow-xl shadow-zinc-900"
                  alt={similar?.title}
                />
                <p className="text-xs sm:text-sm mt-2 font-medium">
                  {similar?.title}
                </p>
                <p className="font-light text-xs">
                  {similar?.release_date?.slice(0, 4)}
                </p>
              </Link>
            </div>
          )}
        />
      ) : (
        <p className="text-lg font-mono text-gray-500">
          No similar movies found
        </p>
      )}
    </div>
  );
};

export default MovieSimilar;
