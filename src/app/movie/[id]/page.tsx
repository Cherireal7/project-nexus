import Image from 'next/image';
import {getMovie} from "@/lib/api";
import {TMDBMovieDetails} from "@/types/movie";
import * as process from "node:process";

export default async function MovieDetailPage({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const movie: TMDBMovieDetails =  await getMovie(Number(id))
    const backdropImg = process.env.NEXT_PUBLIC_IMG_URL + (movie.backdrop_path ?? '');
    const poster = process.env.NEXT_PUBLIC_IMG_URL + (movie.poster_path ?? '');

    if (!id) {
        return <p className="text-white">No movie ID provided.</p>;
    }

    if (!movie) {
        return <p className="text-white">Loading or movie not found for ID: {id}</p>;
    }

    return (
        <section className="relative w-full h-[90vh] text-white">
            <Image
                src={backdropImg}
                alt={movie.title}
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

            <div className="relative z-20 h-full flex items-end px-6 md:px-20 pb-20 max-w-6xl mx-auto">
                <div className="space-y-4 max-w-xl">
                    <Image
                        src={poster}
                        alt={`${movie.title} logo`}
                        width={300}
                        height={100}
                        className="mb-4"
                    />

                    <h1 className="text-4xl md:text-5xl font-extrabold">{movie.title}</h1>

                    <div className="flex flex-wrap gap-3 text-sm text-white/80">
                        <span className="border border-white/30 rounded-full px-3 py-1">{movie.vote_average}</span>
                        {movie.genres.map((g, i) => (
                            <span key={i} className="border border-white/30 rounded-full px-3 py-1">{g.name}</span>
                        ))}
                        <span className="border border-white/30 rounded-full px-3 py-1">{movie.runtime}</span>
                    </div>

                    <p className="text-sm md:text-base text-white/80 leading-relaxed">{movie.overview}</p>

                    <div className="flex gap-4 pt-4">
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                            ▶ Watch Trailer
                        </button>
                        <button className="bg-white/10 text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/20 transition">
                            + Add Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
