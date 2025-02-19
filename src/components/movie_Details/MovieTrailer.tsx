import ReactPlayer from "react-player"; // for embedding YouTube videos
import { Videos, Videos_Results } from "../../types/MovieInterface";

interface TrailerProp {
  movie_videos: Videos | undefined;
  isLoadingTrailer: boolean;
  isErrorTrailer: string | null;
}

const MovieTrailer = ({ movie_videos }: TrailerProp) => {
  const playerProp = {
    controls: true,
    playing: false,
    width: "100%",
    height: "500px",
  };

  const officialTrailer = movie_videos?.results.find(
    (video: Videos_Results) =>
      video.type === "Trailer" && video.site === "YouTube"
  );

  const trailer = officialTrailer
    ? officialTrailer.key
    : movie_videos?.results[0];

  return (
    <div className="mt-12 w-full max-w-6xl px-6 sm:px-4 shadow-2xl">
      <h2 className="text-3xl font-bold mb-4">Watch the Trailer</h2>
      <div className="aspect-w-16 aspect-h-9">
        {trailer ? (
          <ReactPlayer
            {...playerProp}
            url={`https://www.youtube.com/watch?v=${trailer}`}
            className="rounded-lg shadow-lg"
          />
        ) : (
          <p className="text-xl font-mono font-light"> No Trailer Available</p>
        )}
      </div>
    </div>
  );
};

export default MovieTrailer;
