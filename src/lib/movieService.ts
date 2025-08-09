export type Movie = {
    id: number;
    title: string;
    poster: string;
};

export interface FeaturedMovie extends Movie {
    description: string;
    duration: string;
    genre: string[];
    certification: string;
    logo: string; // optional, for logo overlay like Marvel
}

// Base dummy movies used across all categories
const baseMovies: Movie[] = [
    {
        id: 1,
        title: 'Wednesday',
        poster: '/images/wed.png',
    },
    {
        id: 2,
        title: 'Citadel',
        poster: '/images/cita.png',
    },
    {
        id: 3,
        title: 'Avatar',
        poster: '/images/avatars.jpg',
    },
    {
        id: 4,
        title: 'Guardians of the Galaxy',
        poster: '/images/guards.jpg',
    },
    {
        id: 5,
        title: 'Thor: Love and Thunder',
        poster: '/images/cita.png',
    },
];

// Helper to clone and offset IDs
function duplicateMovies(categoryIndex: number, repeats = 3): Movie[] {
    const duplicated: Movie[] = [];

    for (let i = 0; i < repeats; i++) {
        for (const movie of baseMovies) {
            duplicated.push({
                ...movie,
                id: movie.id + i * baseMovies.length + categoryIndex * 1000,
            });
        }
    }

    return duplicated;
}

// Movie list for each category
export async function getTrendingMovies(): Promise<Movie[]> {
    return duplicateMovies(0);
}

export async function getTopSearches(): Promise<Movie[]> {
    return duplicateMovies(1);
}

export async function getActionMovies(): Promise<Movie[]> {
    return duplicateMovies(2);
}

export async function getRomanceMovies(): Promise<Movie[]> {
    return duplicateMovies(3);
}

export async function getComedyMovies(): Promise<Movie[]> {
    return duplicateMovies(4);
}

// Featured Movies (full details)
const featuredMovies: FeaturedMovie[] = [
    {
        id: 101,
        title: 'Spider-Man: No Way Home',
        poster: '/images/cover.png',
        description: 'When a spell goes wrong, dangerous foes from other worlds start to appear...',
        duration: '2h 28m',
        genre: ['Action', 'Adventure'],
        certification: 'CBFC:U/A',
        logo: '/images/Spiderman.png',
    },
    {
        id: 102,
        title: 'Guardians of the Galaxy',
        poster: '/images/guards.jpg',
        description: 'A group of intergalactic criminals must pull together...',
        duration: '2h 10m',
        genre: ['Sci-Fi', 'Adventure'],
        certification: 'PG-13',
        logo: '/images/guardians-logo.png',
    },
    {
        id: 103,
        title: 'Avatar',
        poster: '/images/avatars.jpg',
        description: 'On the lush alien world of Pandora live the Na’vi...',
        duration: '2h 42m',
        genre: ['Sci-Fi', 'Fantasy'],
        certification: 'PG-13',
        logo: '/images/avatar-logo.png',
    },
];

export async function getFeaturedMovies(): Promise<FeaturedMovie[]> {
    return featuredMovies;
}

// 🔥 Unified movie fetcher — handles ALL movie types and enriches base movies
export async function getMovieById(id: number): Promise<FeaturedMovie | null> {
    const fallback: Omit<FeaturedMovie, keyof Movie> = {
        description: 'No description available.',
        duration: '1h 30m',
        genre: ['Unknown'],
        certification: 'Not Rated',
        logo: '',
    };

    // 1. Try featured
    const featured = featuredMovies.find(movie => movie.id === id);
    if (featured) return featured;

    // 2. Try base/duplicate categories
    const allBase: Movie[] = [
        ...duplicateMovies(0),
        ...duplicateMovies(1),
        ...duplicateMovies(2),
        ...duplicateMovies(3),
        ...duplicateMovies(4),
    ];

    const base = allBase.find(movie => movie.id === id);
    if (!base) return null;

    // 3. Enrich and return as FeaturedMovie
    return { ...base, ...fallback };
}

export async function getSeries(): Promise<Movie[]> {
    return [
        {
            id: 201,
            title: 'The Witcher',
            poster: '/images/guards.jpg',
        },
        {
            id: 202,
            title: 'Stranger Things',
            poster: '/images/wed.jpg',
        },
        {
            id: 203,
            title: 'Breaking Bad',
            poster: '/images/avatars.jpg',
        },
        // Add more
    ];
}

