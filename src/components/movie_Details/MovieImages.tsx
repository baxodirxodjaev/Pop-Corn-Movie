import { Images } from "../../types/MovieInterface";

interface MovieImagesProp {
  movies_images: Images | undefined;
}

const MovieImages = ({ movies_images }: MovieImagesProp) => {
  return (
    <div className="mt-8 px-4 md:px-8">
      <h1 className="text-3xl font-medium">Movie Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {movies_images?.backdrops.slice(0, 9).map((img) => (
          <img
            key={img.file_path}
            src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieImages;
