'use server'
import {getMovies, getShows, Mood} from "@/lib/moviesbymood";
import Home from "@/app/home";

export default async function Page({searchParams}: { searchParams: Promise<{ mood: string }> }) {
    const mood = (await searchParams).mood as Mood || "feel_good";
    const discoverMovies = await getMovies(mood);
    const discoverShows = await getShows(mood);

    return <Home movies={discoverMovies.results} shows={discoverShows.results} mood={mood} />;
}
