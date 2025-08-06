'use client';

import Image from 'next/image';
import MovieCard from '@/components/MovieCard';
import {
    getTrendingMovies,
    getTopSearches,
    getActionMovies,
    getRomanceMovies,
    getComedyMovies,
    getFeaturedMovies
} from '@/lib/movieService';
import { useEffect, useState } from 'react';
import type { Movie } from '@/lib/movieService';

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const [topSearches, setTopSearches] = useState<Movie[]>([]);
    const [actionMovies, setActionMovies] = useState<Movie[]>([]);
    const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);
    const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
    const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([]);
    const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies);
        getTopSearches().then(setTopSearches);
        getActionMovies().then(setActionMovies);
        getRomanceMovies().then(setRomanceMovies);
        getComedyMovies().then(setComedyMovies);
        getFeaturedMovies().then(setFeaturedMovies);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeaturedIndex((prev) => (prev + 1) % featuredMovies.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [featuredMovies]);

    const featured = featuredMovies[currentFeaturedIndex];

    const sections = [
        { title: 'Latest & Trending', data: trendingMovies, showNumbers: true },
        { title: 'Top Searches', data: topSearches },
        { title: 'Action', data: actionMovies },
        { title: 'Romance & Drama', data: romanceMovies },
        { title: 'Comedy', data: comedyMovies }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden">
                {featured && (
                    <Image
                        src={featured.poster}
                        alt={featured.title}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg mb-6">
                        Project Nexus
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-10 drop-shadow-md">
                        Discover AI-powered movie and series recommendations tailored just for you.
                    </p>
                </div>
            </section>

            {/* All Sections */}
            {sections.map((section, index) => (
                <section key={index} className="pt-10 bg-black">
                    <div className="flex justify-between items-center px-4 md:px-10 mb-4">
                        <h2 className="text-xl md:text-2xl font-semibold">{section.title}</h2>
                        <button className="text-sm text-gray-400 hover:text-white transition">View More →</button>
                    </div>

                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-8 px-4 md:px-10 pb-6">
                            {section.data.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} showNumber={section.showNumbers} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
