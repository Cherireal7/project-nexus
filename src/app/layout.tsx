import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothLayout from '@/components/SmoothLayout';
import type {Metadata, Viewport} from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Project Nexus – Movie Recommendations',
    description:
        'Discover personalized movie and series suggestions based on your moods.',
    icons: {
        icon: '/favicon.ico',
    },
};

// ✅ themeColor moved here to avoid Next.js warnings
export const viewport: Viewport = {
    themeColor: '#0f172a', // Dark navy
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className=" text-white min-h-screen flex flex-col scroll-smooth antialiased selection:bg-red-500/30 selection:text-white">
        {/* Top Navigation */}
        <Navbar />

        {/* Main Animated Page Content */}
        <SmoothLayout>
            <main className="flex-grow">{children}</main>
        </SmoothLayout>

        {/* Footer */}
        <Footer />
        </body>
        </html>
    );
}
