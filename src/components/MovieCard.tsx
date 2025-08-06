'use client';

import Image from 'next/image';
import { Movie } from '@/lib/movieService';

interface MovieCardProps {
    movie: Movie;
    showNumber?: boolean;
}

export default function MovieCard({ movie, showNumber = false }: MovieCardProps) {
    return (
        <div className="relative min-w-[140px] md:min-w-[180px]">
            {showNumber && (
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[120px] font-extrabold text-white/5 select-none z-0 pointer-events-none">
                    {movie.id}
                </div>
            )}

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                    src={movie.poster}
                    alt={movie.title}
                    width={180}
                    height={270}
                    className="object-cover rounded-2xl"
                />
            </div>
        </div>
    );
}
