import SkeletonMovieCard from '@/components/SkeletonMovieCard';

export default function Loading() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
            {Array.from({ length: 10 }).map((_, i) => (
                <SkeletonMovieCard key={i} />
            ))}
        </div>
    );
}
