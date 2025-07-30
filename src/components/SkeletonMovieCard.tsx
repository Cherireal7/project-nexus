export default function SkeletonMovieCard() {
    return (
        <div className="animate-pulse bg-gray-800 rounded-xl shadow h-72 w-full">
            <div className="bg-gray-700 h-44 rounded-t-xl"></div>
            <div className="p-3 space-y-2">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    );
}
