import { useParams } from "react-router-dom";
import useTVShowDetails from "../fetchAPI_Hooks/useTVShowsDetails";
import Loading from "../components/loader/Loading";
import TV_Show_Cast from "../components/tV_Show_Details/TV_Show_Cast";
import TV_Show_Images from "../components/tV_Show_Details/TV_Show_Images";
import TV_Show_Reviews from "../components/tV_Show_Details/TV_Show_Review";
import TV_Show_Trailer from "../components/tV_Show_Details/TV_Show_Trailer";
import TV_Show_Similar from "../components/tV_Show_Details/TV_Show_Similar";
import StarRating from "../components/rating/StarRating";
import { useSavedMovies } from "../hooks/useSavedMovies";

const TVShowDetailsPage = () => {
  const { id } = useParams();
  const { tvShow, loading, error } = useTVShowDetails(id);
  const { savedTVShows, addMovie  } = useSavedMovies();


  const saved = { poster_path: tvShow?.poster_path, title: tvShow?.name, id: tvShow?.id, type : "tv" };

  
  const isSaved = savedTVShows?.some((item)=> item.id === tvShow?.id);

  
  

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!tvShow) return <p className="text-white"> No TV Show found</p>;

  

  return (
    <div className=" mb-5 pb-6 space-y-6 bg-gray-900">
      <header className="relative w-full ">
        <img
          src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
          alt={tvShow.name}
          className=" inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </header>

      <section className="flex flex-col md:flex-row gap-6 px-6">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`}
            alt={tvShow.name}
            className="w-[250px] rounded-lg shadow-lg mx-auto md:mx-0"
          />
          <StarRating vote_average={Number(tvShow.vote_average.toFixed(1))} />
          <button 
          onClick={() => addMovie(saved, 'tv')} className="cursor-pointer">
          <i className={` ${isSaved ? 'text-yellow-500' : ''} bi bi-bookmark-fill text-[30px]`}></i>
        </button>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white">{tvShow.name}</h1>
          <p className="text-gray-300 mt-3">{tvShow.overview}</p>

          <div className="mt-4 space-y-2 text-gray-400">
            <p>📅 Release date: {tvShow.first_air_date.slice(0, 4)}</p>
            <p>⭐ Rate: {tvShow.vote_average.toFixed(1)}</p>
            <p>🎭 Genres: {tvShow.genres.map((g) => g.name).join(", ")}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold text-white">📺 Seasons:</h3>
            <ul className="text-gray-400 space-y-1">
              {tvShow.seasons.map((s) => (
                <li key={s.season_number}>
                  <span className="font-semibold">
                    Season {s.season_number}:
                  </span>{" "}
                  {s.episode_count} Episodes ({s.air_date?.slice(0, 4)})
                </li>
              ))}
            </ul>
          </div>

          {tvShow.homepage && (
            <a
              href={tvShow.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              🌍 Official website
            </a>
          )}
        </div>
      </section>

      <section className="space-y-6 px-6">
        <TV_Show_Trailer videos={tvShow.videos} />
        <TV_Show_Images images={tvShow.images} />
        <TV_Show_Cast credits={tvShow.credits} />
        <TV_Show_Similar similar={tvShow.similar} />
        <TV_Show_Reviews reviews={tvShow.reviews} />
      </section>
    </div>
  );
};

export default TVShowDetailsPage;
