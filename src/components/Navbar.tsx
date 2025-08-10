'use client';

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <header
            className="
        fixed top-0
        left-0 w-full
        md:left-1/2 md:-translate-x-1/2 md:w-1/3
        z-50 px-6 py-4
        flex flex-row gap-8 justify-center
        rounded-none md:rounded-2xl
        bg-white/40 md:bg-white/20
        backdrop-blur-md shadow-lg
      "
        >
            {/* Project Name - Clickable */}
            <Link
                href="/"
                className="text-red-500 text-xl sm:text-2xl font-bold tracking-tight hover:text-red-600 transition-colors"
            >
                Project Nexus
            </Link>

            {/* Centered Nav Links */}
            <nav className="flex items-center space-x-4 sm:space-x-6">
                <NavLink href="/">Home</NavLink>
                {/*<NavLink href="/trending">Trending</NavLink>*/}
            </nav>
        </header>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-black hover:text-red-500 transition-colors duration-200 text-base sm:text-lg font-medium"
        >
            {children}
        </Link>
    );
}
