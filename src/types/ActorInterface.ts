


export interface Actor_Images_Profiles{
    aspect_ratio : number;
    file_path : string;
    height : number;
    iso_639_1 : null | number | string;
    vote_average : number;
    vote_count : number;
    width : number;
}


export interface Actor_Images{
    profiles : Actor_Images_Profiles[]
}


export interface Movie_Credits_Cast{
    adult : boolean;
    backdrop_path: string;
    credit_id : string;
    genre_ids : number[]
    id : number;
    order : number;
    original_name? : string;
    original_title : string;
    overview : string;
    popularity : number;
    poster_path : string;
    release_date : string;
    title : string;
    video : boolean;
    vote_average : number;
    vote_count : number;
}


export interface Movie_Credits_Crew{
    adult : boolean;
    backdrop_path : string;
    credit_id : string;
    genre_ids : number []
    id : number;
    job : string;
    original_language : string;
    original_title : string;
    overview : string;
    popularity : number;
    poster_path : string;
    release_date : string;
    title : string;
    video : boolean;
    vote_average : number;
    vote_count : number;
}

export interface Movie_Credits{
    cast : Movie_Credits_Cast[];
    crew : Movie_Credits_Crew[];
}


export interface Actor{
    adult : boolean;
    id : number;
    known_for_department : string;
    name : string;
    also_known_as : string[];
    profile_path : string | null;
    biography : string;
    birthday : string;
    deathday? : string ;
    gender : number;
    homepage : string | null;
    images : Actor_Images;
    imdb_id : string;
    movie_credits : Movie_Credits;
    place_of_birth : string | null;
    popularity : number;
}