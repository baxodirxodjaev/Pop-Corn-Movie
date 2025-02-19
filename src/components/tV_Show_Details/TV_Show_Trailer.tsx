import ReactPlayer from "react-player";
import { Videos } from "../../types/TVShowDetalisInterface";

const TV_Show_Trailer = ({ videos }: { videos: Videos }) => {
  const youtubeVideos = videos.results.find(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );
  const trailer = youtubeVideos ? youtubeVideos.key : videos.results[0];

  const playerProp = {
    controls: true,
    playing: false,
    width: "100%",
    height: "500px",
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-white">🎬 Trailer:</h3>
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

export default TV_Show_Trailer;
