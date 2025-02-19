import { useParams } from "react-router-dom";
import MovieTrailer from "../components/movie_Details/MovieTrailer";
import MoviePoster from "../components/movie_Details/MoviePoster";
import MovieInformation from "../components/movie_Details/MovieInformation";
import MovieProductionCompanies from "../components/movie_Details/MovieProductionCompanies";
import useFetchMovieData from "../fetchAPI_Hooks/useFetchMovieData";
import MovieImages from "../components/movie_Details/MovieImages";
import MovieActors from "../components/movie_Details/MovieActors";
import MovieSimilar from "../components/movie_Details/MovieSimilar";
import Reviews from "../components/movie_Details/MovieReviews";
import { MovieDetails } from "../types/MovieInterface";
import Movie_Collection_Banner from "../components/movie_Details/Movie_Collection_Banner";
import Loading from "../components/loader/Loading";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useFetchMovieData<MovieDetails>(id, "movie");

  if (isLoading) return <Loading />;

  console.log(movie);

  // if (isError) return <p className="text-stone-400 text-4xl ">"This movie is not available"</p>;

  return (
    <section className="w-full relative bg-gray-900 text-white min-h-screen flex flex-col items-center   ">
      {/* Movie Background image */}
      <img
        className="w-full mb-8"
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie?.title}
      />

      {/* Movie Poster & Star Rating */}
      <div className="flex flex-col md:flex-row items-center justify-center sm:px-4 space-y-6 md:space-y-0 md:space-x-10 w-full max-w-6xl">
        <MoviePoster
          movie_id={movie?.id}
          vote_count={movie?.vote_count}
          vote_average={movie?.vote_average}
          poster_path={movie?.poster_path}
          title={movie?.title}
        />

        {/* Movie Information */}
        <MovieInformation movie={movie ? movie : null} />
      </div>

      {/* Video Player Section */}
      <MovieTrailer
        movie_videos={movie?.videos}
        isLoadingTrailer={isLoading}
        isErrorTrailer={isError}
      />

      {/* Movie belongs to colletcion */}
      <Movie_Collection_Banner collection={movie?.belongs_to_collection} />

      {/* Movie Gallery section */}
      <MovieImages movies_images={movie?.images} />

      {/*Movie Cast Section */}
      <MovieActors movie_credits={movie?.credits} />

      {/* List with similar movie Section */}
      <MovieSimilar movie_similar={movie?.similar} />

      {/* Comments Section */}
      <Reviews movie_review={movie?.reviews} />

      {/* Movie Production Companies  */}
      <MovieProductionCompanies
        productions={movie ? movie.production_companies : null}
      />
    </section>
  );
};

export default MovieDetailsPage;
