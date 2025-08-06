'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
    return (
        <header className="bg-white/20 backdrop-blur-md fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">


            {/* Left – Logo */}
            <div className="text-red-600 text-2xl font-bold tracking-tight">
                Project Nexus
            </div>

            {/* Center – Nav Links */}
            <nav className="hidden md:flex items-center space-x-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/movie">Movies</NavLink>
                {/*<NavLink href="/series">Series</NavLink>*/}
                {/*<NavLink href="/trending">Trending</NavLink>*/}
                {/*<NavLink href="/categories">Categories</NavLink>*/}
            </nav>

            {/* Right – Search and Avatar */}
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search Movies, Series..."
                    className="bg-white/10 backdrop-blur-md placeholder-gray-400 text-white text-sm px-4 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 w-[180px] md:w-[250px] transition duration-200"
                />
                <Image
                    src="/next.svg"
                    alt="User Avatar"
                    width={36}
                    height={36}
                    className="rounded-full object-cover border border-white/20"
                />
            </div>
        </header>
    );
}

/**
 * NavLink Component with hover animation
 */
function NavLink({href, children}: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-white hover:text-red-500 transition-colors duration-200 text-sm font-medium"
        >
            {children}
        </Link>
    );
}
