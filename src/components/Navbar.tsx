'use client';

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <header className="bg-white/20 backdrop-blur-md fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-row gap-2 items-center justify-center rounded-lg">
            {/* Project Name - Centered at top */}
            <div className="text-red-500 text-2xl font-bold tracking-tight mb-4">
                Project Nexus
            </div>

            {/* Centered Nav Links */}
            <nav className="flex items-center space-x-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/trending">Trending</NavLink>
            </nav>
        </header>
    );
}

function NavLink({href, children}: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-white hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
        >
            {children}
        </Link>
    );
}