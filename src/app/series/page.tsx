// src/app/series/page.tsx

import {getSeries} from '@/lib/movieService';
import MovieCard from '@/components/MovieCard';

export default async function SeriesPage() {
    const series = await getSeries();

    return (
        <main className="min-h-screen bg-black text-white py-12 px-4 md:px-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">Series</h1>

            {series.length === 0 ? (
                <p className="text-gray-400">No series found.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {series.map((show) => (
                        <MovieCard key={show.id} movie={show} />
                    ))}
                </div>
            )}
        </main>
    );
}
