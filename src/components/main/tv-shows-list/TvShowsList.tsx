import useTVShows from "../../../fetchAPI_Hooks/useTvShows";
import Loading from "../../loader/Loading";
import TvShows from "./TvShows";

const TvShowsList = () => {
  const { tvShows, loading, error, setPage, page } = useTVShows();
  if(loading) return <Loading/>

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-white mb-4">
        📺 Popular Tv shows
      </h2>

      {/* {loading && <Loading/>} */}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tvShows &&
          tvShows.map((show) => <TvShows key={show.id} show={show} />)}
      </div>

      {/* pagination */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          className="px-4 py-2 bg-gray-700 text-white rounded-md"
          disabled={page === 1}
        >
          ⬅️ Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded-md"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default TvShowsList;
