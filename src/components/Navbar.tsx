'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center shadow">
            <Link href="/" className="text-xl font-bold text-yellow-400">
                MovieApp
            </Link>
            <div className="space-x-4 text-gray-300">
                <Link href="/search">Search</Link>
                <Link href="/watchlist">Watchlist</Link>
                <Link href="/ai-suggestions">AI Concierge</Link>
            </div>
        </nav>
    );
}
