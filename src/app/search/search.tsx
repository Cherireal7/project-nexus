'use client';

import Link from 'next/link';
import MovieCard from '@/components/MovieCard';
import {Movie, TVShow} from "@/lib/moviesbymood";

export default function Search({movies, shows}: {movies: Movie[], shows: TVShow[]}) {
    return (
        <>
            {/* RESULTS STRIP */}
            <section id="mood-results" className="bg-black py-8 mt-20">
                {movies.length === 0 ? (
                    <p className="px-4 md:px-10 text-white/50 animate-in fade-in duration-300">
                        Oops mate, No results. Try a different mood or keyword please.
                    </p>
                ) : (
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-6 px-4 md:px-10 pb-4">
                            {movies.map((movie) => (
                                <Link
                                    key={movie.id}
                                    href={`/movie/${movie.id}`}
                                    className={[
                                        'min-w-[140px] md:min-w-[180px] transition',
                                        // highlightId === movie.id ? 'scale-105 ring-2 ring-red-500 rounded-2xl' : ''
                                    ].join(' ')}
                                >
                                    <MovieCard movie={movie} showNumber={false} />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {shows.length === 0 ? (
                    <p className="px-4 md:px-10 text-white/50 animate-in fade-in duration-300">
                        No results. Try a different mood or keyword.
                    </p>
                ) : (
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-6 px-4 md:px-10 pb-4">
                            {shows.map((movie) => (
                                <Link
                                    key={movie.id}
                                    href={`/movie/${movie.id}`}
                                    className={[
                                        'min-w-[140px] md:min-w-[180px] transition',
                                        // highlightId === movie.id ? 'scale-105 ring-2 ring-red-500 rounded-2xl' : ''
                                    ].join(' ')}
                                >
                                    <MovieCard movie={movie} showNumber={false} />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
