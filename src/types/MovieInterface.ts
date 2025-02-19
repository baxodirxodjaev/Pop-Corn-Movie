
export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Production_Company {
    id: number;
    logo_path? : string | null;
    name: string;
    origin_country: string;
  }
  
  export interface Spoken_Languages {
    english_name: string;
    iso_639_1: string;
    name: string;
  }

  export interface Production_Country{
    iso_3166_1: string;
    name: string;
  }


  export interface Belongs_to_collection{
    backdrop_path? : string | null,
    id: number,
    name: string,
    poster_path?: string | null;
  }

  export interface Credits_Cast{
     adult: boolean;
     cast_id: number;
     character: string;
     credit_id: string;
     gender?: number | null;
     id: number;
     known_for_department : string,
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string | null;
  }

  export interface Credits_Crew{
    adult: boolean;
    credit_id: number | string;
    department: string;
    gender?: number | null;
    id: number;
    job: string;
    known_for_department: string;
   name: string;
   original_name: string;
   popularity: number;
   profile_path? : string | null;
  }

  export interface Credits{
    cast: Credits_Cast[];
    crew : Credits_Crew[];
  }


  export interface Images_Backdrops_Logos_Posters{
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }

  export interface Images{
    backdrops: Images_Backdrops_Logos_Posters[];
    logos: Images_Backdrops_Logos_Posters[];
    posters: Images_Backdrops_Logos_Posters[];
  }

  export interface Author_details{
    avatar_path? : string | null;
    name : string,
    rating? : number | null,
    username : string,
  }

  export interface Reviews_Results{
    author: string;
    author_details : Author_details,
     content: string;
     created_at: string;
     id: string;
     updated_at: string;
     url : string
  }

  export interface Movie_Reviews{
    page : number,
    results: Reviews_Results [];
    total_pages: number;
    total_results: number;
  }

  export interface Similar_Results{
    adult: boolean;
    backdrop_path?: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path? : string | null;
    release_date?: string;
    title: string;
    video : boolean;
    vote_average: number;
    vote_count: number;
  }

  export interface Similar{
    page : number,
    results : Similar_Results[],
   total_pages: number;
   total_results: number;
  }


  export interface Videos_Results{
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official : boolean;
    published_at : string;
    site : string;
    size: number;
    type: string;
  }


  export interface Videos{
    results : Videos_Results []
  }



export interface MovieDetails{
    adult: boolean;
    backdrop_path : string,
    belongs_to_collection: Belongs_to_collection,
    budget : number,
    credits : Credits;
    genres : Genre [],
    homepage: string;
    id :  number,
    images: Images 
    imdb_id: string;
    origin_country: string[] ,
    original_language: string ,
    original_title: string ,
    overview: string ,
    popularity: number ,
    poster_path : string ,
    production_companies : Production_Company[],
    production_countries : Production_Country[],
    release_date: string ,
    revenue: number ,
    reviews : Movie_Reviews
    runtime: number ,
    similar : Similar,
    spoken_languages : Spoken_Languages[]
    status : string,
    tagline : string,
    title : string ,
    video : boolean ,
    videos : Videos 
    vote_average: number ,
    vote_count: number ,
}
