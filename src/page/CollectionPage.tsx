import { Link, useParams } from "react-router-dom";
import useFetchCollection from "../fetchAPI_Hooks/useFetchCollectionMovie";
import Loading from "../components/loader/Loading";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const {
    data: collection,
    isLoading,
    isError,
  } = useFetchCollection(collectionId);

  console.log(collection);

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">{isError}</p>;
  if (!collection)
    return <p className="text-gray-600">There is no movie collection</p>;

  return (
    <div className="p-6">
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
        <img
          src={`https://image.tmdb.org/t/p/w1280${collection.backdrop_path}`}
          alt={collection.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <h1 className="absolute bottom-4 left-4 text-white text-3xl md:text-4xl font-bold">
          {collection.name}
        </h1>
      </div>

      <p className="text-gray-300 mb-6">{collection.overview}</p>

      <h2 className="text-2xl font-semibold text-white mb-4">
        Фильмы в коллекции:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {collection.parts.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="group">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <p className="text-center text-white font-medium py-3 group-hover:text-indigo-400 transition">
                {movie.title} ({movie.release_date?.slice(0, 4)})
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
