import Image from 'next/image';
import {getMovie} from "@/lib/api";
import {TMDBMovieDetails} from "@/types/movie";
import * as process from "node:process";

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // logic
    const { id } = await params;
    const movie: TMDBMovieDetails = await getMovie(Number(id))
    const backdropImg = process.env.NEXT_PUBLIC_IMG_URL + (movie.backdrop_path ?? '');
    const poster = process.env.NEXT_PUBLIC_IMG_URL + (movie.poster_path ?? '');

    if (!id) {
        return <p className="text-white">No movie ID provided.</p>;
    }

    if (!movie) {
        return <p className="text-white">Loading or movie not found for ID: {id}</p>;
    }

    return (
        <section
            className="
        relative w-full
        min-h-[70vh] md:h-[90vh]
        mt-20 sm:mt-16
        
        text-white
      "
        >
            <Image
                src={backdropImg}
                alt={movie.title}
                fill
                priority
                className="object-cover object-center"
            />

            {/* Stronger gradient on mobile for legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div
                className="
          relative z-20 h-full
          flex items-end
          px-4 sm:px-6 md:px-10
          pb-16 md:pb-20
          max-w-6xl mx-auto
        "
            >
                {/* Mobile-friendly readable panel; transparent on md+ */}
                <div
                    className="
            w-full max-w-2xl
            bg-black/35 backdrop-blur-sm rounded-2xl
            p-4 sm:p-6
            md:bg-transparent md:backdrop-blur-0 md:rounded-none md:p-0
            space-y-3 sm:space-y-4
          "
                >
                    <Image
                        src={poster}
                        alt={`${movie.title} poster`}
                        width={300}
                        height={100}
                        className="w-24 sm:w-36 md:w-48 h-auto rounded-lg shadow-lg mb-2 sm:mb-3"
                    />

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                        {movie.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-white/85">
            <span className="border border-white/30 rounded-full px-2.5 py-1">
              {movie.vote_average}
            </span>
                        {movie.genres.map((g, i) => (
                            <span
                                key={i}
                                className="border border-white/30 rounded-full px-2.5 py-1"
                            >
                {g.name}
              </span>
                        ))}
                        <span className="border border-white/30 rounded-full px-2.5 py-1">
              {movie.runtime}
            </span>
                    </div>

                    <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                        {movie.overview}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4 w-full">
                        <button className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                            ▶ Watch Trailer
                        </button>
                        <button className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/20 transition">
                            + Add Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
