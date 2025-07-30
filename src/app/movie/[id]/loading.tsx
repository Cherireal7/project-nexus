export default function Loading() {
    return (
        <div className="p-6">
            <div className="animate-pulse">
                <div className="h-72 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
        </div>
    );
}
