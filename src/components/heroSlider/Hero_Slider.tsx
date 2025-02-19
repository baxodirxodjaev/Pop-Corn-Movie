import { Link } from "react-router-dom";

import useFetchNowPlaying from "../../fetchAPI_Hooks/useFetchNowPlaying";
import Loading from "../loader/Loading";
import SliderComponent from "../slider/SliderComponent";

const Hero_Slider = () => {
  const { moviesNowPlaying, isLoading, isError } = useFetchNowPlaying();

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-red-500">{isError}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative w-full mx-auto">
      <SliderComponent
        classname={"px-0"}
        settings={settings}
        items={moviesNowPlaying}
        renderItem={(now) => (
          <div
            key={now.id}
            className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[90vh]"
          >
            <img
              src={`https://image.tmdb.org/t/p/w1280${now?.backdrop_path}`}
              alt={now?.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>

            <div className="absolute bottom-10 left-10 text-white max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-bold">{now?.title}</h2>
              <p className="hidden sm:block text-sm sm:text-lg text-gray-300 mt-2">
                {now?.overview.length > 200
                  ? now.overview.slice(0, 200) + "..."
                  : now.overview}
              </p>
              <Link to={`/movie/${now?.id}`}>
                <button className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded-md transition">
                  More details
                </button>
              </Link>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Hero_Slider;
