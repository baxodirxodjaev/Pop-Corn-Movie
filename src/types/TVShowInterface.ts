

export interface TV_Show {
    id: number;
    name: string;
    poster_path: string;
    first_air_date: string;
    vote_average: number;
  }
  
  export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }
  
  export interface Credits {
    cast: CastMember[];
  }
  
  export interface Image {
    file_path: string;
  }
  
  export interface Images {
    backdrops: Image[];
    posters: Image[];
  }
  
  export interface ReviewAuthor {
    author: string;
    content: string;
    created_at: string;
  }
  
  export interface Reviews {
    results: ReviewAuthor[];
  }
  
  export interface Video {
    key: string;
    name: string;
    site: string;
    type: string;
  }
  
  export interface Videos {
    results: Video[];
  }

  export interface SimilarTVShow {
    id: number;
    name: string;
    poster_path: string;
    first_air_date: string;
  }
  
  export interface SimilarTVShows {
    results: SimilarTVShow[];
  }
  
  export interface TVShowDetails {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    first_air_date: string;
    genres: { id: number; name: string }[];
    vote_average: number;
    seasons: { season_number: number; episode_count: number; air_date: string }[];
    similar : SimilarTVShows,
    homepage: string;
    credits: Credits;
    images: Images;
    reviews: Reviews;
    videos: Videos;
  }
  