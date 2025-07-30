import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothLayout from '@/components/SmoothLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Movie Recommendation App',
    description: 'Discover and get personalized movie recommendations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Navbar />
        <SmoothLayout>
            <main className="flex-grow">{children}</main>
        </SmoothLayout>
        <Footer />
        </body>
        </html>
    );
}
