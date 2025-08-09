export interface TMDBMovie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string; // e.g., "2025-07-29"
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

    // When hitting /trending, TMDB may include this:
    media_type?: 'movie'; // could be 'tv' or 'person' on mixed endpoints
}


export interface TMDBMovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string; // ISO date string
    revenue: number;
    runtime: number | null; // Can be null if unknown
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string; // e.g. "Released"
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
