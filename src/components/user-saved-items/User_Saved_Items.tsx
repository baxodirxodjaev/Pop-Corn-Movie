import { Link } from "react-router-dom";
import { Saved_Movie } from "../../types/SavedMovieInterface";

interface User_Saved_Items_Prop {
  savedItem: Saved_Movie[];
  removeMovie: (id: number | undefined, type: string) => void;
}

const User_Saved_Items = ({
  savedItem,
  removeMovie,
}: User_Saved_Items_Prop) => {
  const hasMovies = savedItem.some((saved) => saved.type === "movie");
  const hasTVShows = savedItem.some((saved) => saved.type === "tv");

  return (
    <>
      {savedItem && (
        <div className="my-4">
          <p className="text-center text-gray-400 mb-5">
            There is your favourite{" "}
            {hasMovies
              ? "🎬 Movies"
              : hasTVShows
              ? "📺 TV shows"
              : "saved items"}
            .
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {savedItem?.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item?.poster_path}`}
                  alt={item?.title}
                  className="w-full h-60 object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className=" bg-black bg-opacity-70 p-2 text-center text-sm font-semibold">
                  {item?.title}
                </div>
                <div className="flex justify-between">
                  <Link
                    to={hasMovies ? `/movie/${item.id}` : `/tv/${item.id}`}
                    className="w-[48%]"
                  >
                    <button className=" w-full bg-zinc-300 hover:bg-zinc-500 hover:text-white text-gray-600 cursor-pointer px-4 py-1 font-bold ">
                      View
                    </button>
                  </Link>
                  <button
                    onClick={() => removeMovie(item.id, item.type)}
                    className="bg-neutral-800 hover:text-gray-400 px-4 py-1 font-bold text-gray-200 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr />
    </>
  );
};

export default User_Saved_Items;
