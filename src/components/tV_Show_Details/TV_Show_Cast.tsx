import { Link } from "react-router-dom";
import { Credits } from "../../types/TVShowDetalisInterface";
import SliderComponent from "../slider/SliderComponent";

const TV_Show_Cast = ({ credits }: { credits: Credits }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-white">🎭 Actors:</h3>
      <SliderComponent
        classname=""
        items={credits.cast.slice(0, 10)}
        renderItem={(actor) => (
          <div key={actor.id} className="text-center   w-[200px]">
            <Link
              to={`/actor/${actor.id}`}
              className="flex flex-col items-center "
            >
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200"
                }
                alt={actor.name}
                className="rounded-lg shadow-lg w-[150px] h-[210px]"
              />
              <p className="text-white mt-2 text-sm">{actor.name}</p>
              <p className="text-gray-400 text-xs">({actor.character})</p>
            </Link>
          </div>
        )}
      />
    </div>
  );
};

export default TV_Show_Cast;
