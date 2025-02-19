import { Link } from "react-router-dom";
import { SimilarTVShows } from "../../types/TVShowDetalisInterface";
import SliderComponent from "../slider/SliderComponent";

const TV_Show_Similar = ({ similar }: { similar: SimilarTVShows }) => {
  if (!similar.results.length) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-white mb-3">
        🎥 Similar Tv shows:
      </h3>
      <SliderComponent
        settings={{ dots: false }}
        classname="px-2"
        items={similar.results.slice(0, 10)}
        renderItem={(show) => (
          <div>
            <Link
              key={show.id}
              to={`/tv/${show.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                alt={show.name}
                className="w-full h-[200px] object-cover"
              />
              <p className="text-center text-white font-medium py-3">
                {show.name}
              </p>
            </Link>
          </div>
        )}
      />
    </div>
  );
};

export default TV_Show_Similar;
