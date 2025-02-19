import { Link, useParams } from "react-router-dom";
import useFetchMovieData from "../fetchAPI_Hooks/useFetchMovieData";
import { Actor } from "../types/ActorInterface";
import Loading from "../components/loader/Loading";

const ActorPage = () => {
  const { id } = useParams();
  const {
    data: actor,
    isLoading,
    isError,
  } = useFetchMovieData<Actor>(id, "actor");

  console.log(actor);

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">{isError}</p>;
  if (!actor)
    return (
      <p className="text-cyan-600 text-lg font-mono">Actor is not found</p>
    );

  return (
    <div className="p-6">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
          alt={actor.name}
          className=" mx-auto shadow-2xl shadow-black mb-4  md:mx-0"
        />
      </div>
      <h1 className="text-3xl font-bold">{actor.name}</h1>
      <ul className="flex gap-3 items-center flex-wrap mt-3 mb-3">
        <li className="text-lg font-medium ">Also known as :</li>
        {actor.also_known_as.map((known) => (
          <li key={known} className="font-light text-gray-200">
            {known}
          </li>
        ))}
      </ul>
      <p className="text-gray-100 mb-3">
        Place of birth: {actor.place_of_birth}
      </p>
      <p className="text-gray-500">{actor.biography}</p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {actor.images.profiles.slice(0, 6).map((img) => (
          <img
            key={img.file_path}
            src={`https://image.tmdb.org/t/p/w300${img.file_path}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-6 text-white">Movies:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {actor.movie_credits.cast.slice(0, 10).map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="group">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <p className="text-center text-white font-medium py-3 group-hover:text-indigo-400 transition">
                {movie.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActorPage;
