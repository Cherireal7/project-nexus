// lib/movieService.ts

export type Movie = {
    id: number;
    title: string;
    poster: string;
};

export interface FeaturedMovie {
    id: number;
    title: string;
    poster: string;
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
        poster: '/images/avatar.png',
    },
    {
        id: 4,
        title: 'Guardians of the Galaxy',
        poster: '/images/guard.png',
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

// Exported functions for different sections
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



export async function getFeaturedMovies(): Promise<Movie[]> {
    return [
        {
            id: 101,
            title: 'Spider-Man: No Way Home',
            poster: '/images/cover.png',
        },
        {
            id: 102,
            title: 'Guardians of the Galaxy',
            poster: '/images/guards.jpg',
        },
        {
            id: 103,
            title: 'Avatar',
            poster: '/images/avatars.jpg',
        },
    ];
}


