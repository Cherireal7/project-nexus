'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MovieCard from '@/components/MovieCard';
import {Mood, Movie, TVShow} from "@/lib/moviesbymood";
import {useRouter} from "next/navigation";

const MOODS: { label: string; emoji: string; uri: Mood }[] = [
    { label: "Feel Good", emoji: "😊", uri: "feel_good" },
    { label: "Thrilling", emoji: "🔥", uri: "thrilling" },
    { label: "Romantic", emoji: "❤️", uri: "romantic" },
    { label: "Dark", emoji: "🌑", uri: "dark" },
    { label: "Epic", emoji: "🏔️", uri: "epic" },
    { label: "Sci-Fi", emoji: "🛸", uri: "sci_fi" },
    { label: "Comedy", emoji: "😂", uri: "comedy" },
];

export default function Home({movies, shows, mood}: {movies: Movie[], shows: TVShow[], mood: Mood}) {
    const router = useRouter();
    const [query, setQuery] = useState('');

    return (
        <>
            {/* HERO */}
            <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
                <Image
                    src="/images/cover.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover object-center will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

                {/* Glass panel */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 mt-20">
                    <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-50 duration-500">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                            <p className="text-sm text-white/70 tracking-wide">Mood-Based Picks</p>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                            Watch something that matches your <span className="text-red-500">mood</span>.
                        </h1>
                        <p className="text-white/70 mb-6">
                            Choose a vibe or search a title. No overthinking — just press play.
                        </p>

                        {/* Search + Surprise */}
                        <div className="flex gap-2 mb-4">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search by title…"
                                className="flex-1 rounded-xl bg-black/40 text-white placeholder-white/40 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                            />
                            <button
                                onClick={()=>{router.push(`/search?query=${encodeURIComponent(query)}`)}}
                                className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-3 font-semibold transition active:scale-95"
                                title="Pick a random title from current results"
                            >
                                Search
                            </button>
                        </div>

                        {/* Mood chips */}
                        <div className="flex flex-wrap gap-2">
                            {MOODS.map((m) => {
                                const active = mood === m.uri;
                                return (
                                    <button
                                        key={m.label}
                                        onClick={()=>{router.push(`?mood=${encodeURIComponent(m.uri)}`)}}
                                        className={[
                                            'group relative px-4 py-2 rounded-full border transition will-change-transform',
                                            active
                                                ? 'bg-red-600/90 border-red-500 text-white shadow'
                                                : 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10'
                                        ].join(' ')}
                                    >
                                        <span className="mr-1">{m.emoji}</span>
                                        {m.label}
                                        <span
                                            className={[
                                                'absolute left-4 right-4 -bottom-0.5 h-px',
                                                active ? 'bg-white/80' : 'bg-white/10 group-hover:bg-white/30'
                                            ].join(' ')}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS STRIP */}
            <section id="mood-results" className="bg-black py-8">
                <div className="px-4 md:px-10 mb-4 flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-semibold">
                        {mood || query ? 'Your Picks MOVIES' : 'Popular Right Now'}
                    </h2>
                    {(mood || query) && (
                        <Link
                            href={'/'}
                            className="text-sm text-white/60 hover:text-white transition"
                        >
                            Clear filters
                        </Link>
                    )}
                </div>

                {movies.length === 0 ? (
                    <p className="px-4 md:px-10 text-white/50 animate-in fade-in duration-300">
                        Oops mate, No results. Try a different mood or keyword please :)
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
                                    <MovieCard movie={movie} showNumber={false}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="px-4 md:px-10 mb-4 flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-semibold">
                        {mood || query ? 'Your Picks TV SHOWS' : 'Popular Right Now'}
                    </h2>

                </div>

                {shows.length === 0 ? (
                    <p className="px-4 md:px-10 text-white/50 animate-in fade-in duration-300">
                        Oops mate, No results. Try a different mood or keyword please :)
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
                                    <MovieCard movie={movie} showNumber={false}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
