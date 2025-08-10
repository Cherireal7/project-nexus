import process from "node:process";

export type Mood =
    | "feel_good"
    | "thrilling"
    | "romantic"
    | "dark"
    | "epic"
    | "sci_fi"
    | "comedy";

type DiscoverOptions = {
    page?: number;
    language?: string;                // default "en-US"
    minVotes?: number;                // default 500
    year?: number;                    // optional: filter by year
    releaseDateGte?: string;          // e.g., "2024-01-01"
    originalLanguage?: string;        // e.g., "en"
    signal?: AbortSignal;             // pass your own AbortController if desired
};

export type Movie = {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    adult: boolean;
    genre_ids: number[];
    popularity: number;
    vote_average: number;
    vote_count: number;
    poster_path: string | null;
    backdrop_path: string | null;
    original_language: string;
    video: boolean;
};

export type TVShow = {
    backdrop_path: string | null;    // Path to backdrop image
    first_air_date: string;          // e.g., "2023-01-23"
    genre_ids: number[];             // Array of TMDB genre IDs
    id: number;                      // TMDB internal ID
    name: string;                    // Display name of the show
    origin_country: string[];        // Country codes, e.g., ["PH"]
    original_language: string;       // ISO 639-1 language code
    original_name: string;           // Original title in its language
    overview: string;                // Synopsis/description
    popularity: number;              // Popularity score from TMDB
    poster_path: string | null;      // Path to poster image
    vote_average: number;            // Average rating
    vote_count: number;              // Number of votes
};

export type DiscoverResponse = {
    page: number;
    total_pages: number;
    total_results: number;
    results: Movie[];
};

export type DiscoverResponseTVShow = {
    page: number;
    total_pages: number;
    total_results: number;
    results:  TVShow[];
};

// TMDB genre constants (subset used here)
const GENRE = {
    Action: 28,
    Adventure: 12,
    Comedy: 35,
    Crime: 80,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    SciFi: 878,
    Thriller: 53,
    War: 10752,
} as const;

function moodParams(mood: Mood): Record<string, string> {
    switch (mood) {
        case "feel_good":
            return {
                with_genres: [GENRE.Comedy, GENRE.Family, GENRE.Drama].join(","),
                without_genres: [GENRE.Horror, GENRE.Thriller, GENRE.Crime].join(","),
                "vote_average.gte": "6.8",
            };
        case "thrilling":
            return {
                with_genres: [GENRE.Thriller, GENRE.Action, GENRE.Crime].join(","),
                "with_runtime.lte": "130",
                "vote_average.gte": "6.5",
            };
        case "romantic":
            return {
                with_genres: [GENRE.Romance, GENRE.Drama].join(","),
                without_genres: [GENRE.Horror, GENRE.Thriller].join(","),
                "vote_average.gte": "6.5",
            };
        case "dark":
            return {
                with_genres: [GENRE.Horror, GENRE.Mystery, GENRE.Thriller].join(","),
                "vote_average.gte": "6.2",
            };
        case "epic":
            return {
                with_genres: [GENRE.Adventure, GENRE.Fantasy, GENRE.History, GENRE.War].join(","),
                "with_runtime.gte": "140",
                "vote_average.gte": "6.7",
            };
        case "sci_fi":
            return {
                with_genres: [GENRE.SciFi, GENRE.Adventure, GENRE.Action].join(","),
                "vote_average.gte": "6.5",
            };
        case "comedy":
            return {
                with_genres: [GENRE.Comedy, GENRE.Romance].join(","),
                without_genres: String(GENRE.Horror),
                "vote_average.gte": "6.2",
            };
    }
}

function buildQuery(mood: Mood, opts: DiscoverOptions = {}) {
    const {
        page = 1,
        language = "en-US",
        minVotes = 500,
        year,
        releaseDateGte,
        originalLanguage,
    } = opts;

    const base = new URLSearchParams({
        include_adult: "false",
        include_video: "false",
        language,
        page: String(page),
        sort_by: "popularity.desc",
        "vote_count.gte": String(minVotes),
        ...moodParams(mood),
    });

    if (year) base.set("year", String(year));
    if (releaseDateGte) base.set("primary_release_date.gte", releaseDateGte);
    if (originalLanguage) base.set("with_original_language", originalLanguage);

    return base.toString();
}

/**
 * Fetch movies by mood from TMDB Discover.
 *
 * @example
 * const data = await discoverByMood("feel_good", { releaseDateGte: "2024-01-01" });
 */
async function discoverByMood(
    type: "movie"|"tv",
    mood: Mood,
    opts: DiscoverOptions = {}
) {
    const qs = buildQuery(mood, opts);

    const url = `${process.env.API_URL}/discover/${type}?${qs}`;

    // Optional: internal timeout so requests don't hang forever
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                accept: "application/json",
            },
            signal: opts.signal ?? controller.signal,
            // In Next.js 14/15 you can add: cache: 'no-store' if you want fresh every time
        });

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`TMDB error ${res.status}: ${text || res.statusText}`);
        }

        return type === "tv" ? (await res.json()) as DiscoverResponseTVShow : (await res.json()) as DiscoverResponse;
    } finally {
        clearTimeout(timeout);
    }
}

export const  getMovies = async (mood: Mood)=>{
    return await discoverByMood("movie", mood) as DiscoverResponse;
}

export const  getShows = async (mood: Mood)=>{
    return await discoverByMood("tv", mood) as DiscoverResponseTVShow;
}