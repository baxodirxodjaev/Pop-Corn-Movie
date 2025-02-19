import { Credits_Cast, MovieDetails } from "../../types/MovieInterface";

interface MovieInformationProp {
  movie: MovieDetails | null;
}

const MovieInformation = ({ movie }: MovieInformationProp) => {
  return (
    <div className="flex flex-col items-start space-y-4 px-6 sm:px-0">
      <h1 className="text-3xl md:text-4xl font-bold">{movie?.title}</h1>
      <div className="text-lg text-gray-400  overflow-auto">
        <p>
          <strong>Year:</strong> {movie?.release_date}
        </p>

        <ul className="flex  flex-wrap ">
          <li>
            {" "}
            <strong>Genre:</strong>
          </li>
          {movie?.genres.map((genre) => (
            <li className="mx-3" key={genre.id}>
              {genre.name},
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap ">
          <li>
            {" "}
            <strong>Language:</strong>
          </li>
          {movie?.spoken_languages.map((lang) => (
            <li className="mx-3" key={lang.iso_639_1}>
              {lang.name}
            </li>
          ))}
        </ul>

        <p>
          <strong>Origin country:</strong> {movie?.origin_country}
        </p>

        <ul className="flex flex-wrap gap-3">
          <li>
            {" "}
            <strong>Production countries:</strong>
          </li>
          {movie?.production_countries.map((country) => (
            <li key={country.iso_3166_1}>{country.name},</li>
          ))}
        </ul>
        <p>
          <strong>Released:</strong> {movie?.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movie?.runtime} min.
        </p>
        <p>
          <strong>Rated:</strong> {movie?.vote_average}
        </p>
        <p>
          <strong>Budget:</strong> ${" "}
          {movie?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        </p>

        <ul className="flex flex-wrap">
          <li>
            {" "}
            <strong>Actors : </strong>{" "}
          </li>
          {(movie?.credits?.cast ?? [])
            .slice(0, 10)
            .map((actor: Credits_Cast) => (
              <li className="ml-3" key={actor.id}>
                {actor.name},
              </li>
            ))}
        </ul>

        <p>
          <strong>Tagline:</strong> {movie?.tagline}
        </p>
        <p>
          <strong>Plot:</strong> {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieInformation;
