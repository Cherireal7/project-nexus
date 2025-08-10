'use server'
import Search from "@/app/search/search";
import {searchMovies, searchShows} from "@/lib/searchMovies";

export default async function Page({searchParams}: { searchParams: Promise<{ query: string }> }) {
    const {query} = await searchParams;
    const discoverMovies = await searchMovies(query);
    const discoverShows = await searchShows(query);

    return <Search movies={discoverMovies.results} shows={discoverShows.results}/>;
}