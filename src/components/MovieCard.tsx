'use client';

import Image from 'next/image';
import {TMDBMovie} from "@/types/movie";

interface MovieCardProps {
    movie: TMDBMovie;
    showNumber?: boolean;
}

export default function MovieCard({ movie, showNumber = false }: MovieCardProps) {
    const imgBaseURL = process.env.NEXT_PUBLIC_IMG_URL + (movie.poster_path ?? '');
    return (
        <div className="relative min-w-[140px] md:min-w-[180px]">
            {showNumber && (
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[120px] font-extrabold text-white/5 select-none z-0 pointer-events-none">
                    {movie.id}
                </div>
            )}

            <div className="relative z-10 w-[140px] h-[210px] md:w-[180px] md:h-[270px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                    src={imgBaseURL}
                    alt={movie.title}
                    fill
                    sizes="(min-width: 768px) 180px, 140px"
                    className="object-cover"
                />

            </div>
        </div>
    );
}
