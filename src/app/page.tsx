import Image from 'next/image';
import MovieCard from '@/components/MovieCard';
import Link from 'next/link';
import {
    getActionMovies,
    getComedyMovies,
    getFeaturedMovies,
    getRomanceMovies,
    getTopSearches,
    getTrendingMovies
} from '@/lib/movieService';
import {getPopularMovies} from "@/lib/api";
import {TMDBMovie} from "@/types/movie";

export default async function Home() {
    const [
        trendingMovies,
        topSearches,
        actionMovies,
        romanceMovies,
        comedyMovies,
        featuredMovies,
    ] = await Promise.all([
        getTrendingMovies(),
        getTopSearches(),
        getActionMovies(),
        getRomanceMovies(),
        getComedyMovies(),
        getFeaturedMovies(),
    ]);

    const response = await getPopularMovies();
    const popularMovies:TMDBMovie[] = response.results


    const featured = featuredMovies[0]; // Pick the first featured movie

    const sections = [
        { title: 'Latest & Trending', data: popularMovies, showNumbers: true },
        // { title: 'Top Searches', data: topSearches },
        // { title: 'Action', data: actionMovies },
        // { title: 'Romance & Drama', data: romanceMovies },
        // { title: 'Comedy', data: comedyMovies },
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
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            {section.title}
                        </h2>
                        <button className="text-sm text-gray-400 hover:text-white transition">
                            View More →
                        </button>
                    </div>

                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-8 px-4 md:px-10 pb-6">
                            {section.data.map((movie) => (
                                <Link
                                    href={`/movie/${movie.id}`}
                                    key={movie.id}
                                    className="min-w-[140px] md:min-w-[180px]"
                                >
                                    <MovieCard movie={movie} showNumber={section.showNumbers} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
