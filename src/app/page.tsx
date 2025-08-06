'use client';

import Image from 'next/image';
// import Link from 'next/link';

export default function Home() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/cover.png"
                alt="Cover Background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
                <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg mb-6">
                    Project Nexus
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-10 drop-shadow-md">
                    Discover AI-powered movie and series recommendations tailored just for you.
                </p>
                {/*<Link*/}
                {/*    */}
                {/*    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"*/}
                {/*>*/}
                {/*    Explore Now*/}
                {/*</Link>*/}
            </div>
        </section>
    );
}
