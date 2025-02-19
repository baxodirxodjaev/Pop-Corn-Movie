import { Production_Company } from "../../types/MovieInterface";

interface MovieProdictionProp {
  productions: Production_Company[] | null;
}

const MovieProductionCompanies = ({ productions }: MovieProdictionProp) => {
  return (
    <div className="mt-[90px] px-6  bg-slate-700 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Prodiction companies:</h3>
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {productions?.map((company) => (
          <li key={company.id}>
            {company.logo_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                alt={company.name}
                className="h-10 inline-block mr-2"
              />
            )}
            {company.name} ({company.origin_country})
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieProductionCompanies;
