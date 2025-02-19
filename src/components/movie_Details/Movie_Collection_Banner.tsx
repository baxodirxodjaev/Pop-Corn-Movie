import { Link } from "react-router-dom";
import { Belongs_to_collection } from "../../types/MovieInterface";

interface CollectionBannerProps {
  collection: Belongs_to_collection | undefined;
}

const Movie_Collection_Banner = ({ collection }: CollectionBannerProps) => {
  if (!collection) return null;

  return (
    <div className="relative w-full max-w-5xl px-6 sm:px-4 mx-auto my-6 mt-[50px]">
      <h3 className="text-2xl font-medium">Movie Collection</h3>
      <Link to={`/collection/${collection.id}`} className="block group">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-[450px] w-full overflow-hidden rounded-lg shadow-xl">
          <img
            src={`https://image.tmdb.org/t/p/w1280${collection?.backdrop_path}`}
            alt={collection?.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:brightness-75 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        <h2 className="absolute bottom-4 left-4 text-white text-2xl sm:text-3xl md:text-4xl font-bold group-hover:text-indigo-400 transition duration-300">
          {collection?.name}
        </h2>
      </Link>
    </div>
  );
};

export default Movie_Collection_Banner;
