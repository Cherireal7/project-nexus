import process from "node:process";
import {DiscoverResponse, DiscoverResponseTVShow} from "@/lib/moviesbymood";

async function discoverByQuery(
    query: string,
    type: "movie"|"tv",
) {
    const url = `${process.env.API_URL}/search/${type}?query=${encodeURIComponent(query)}`;

    // Optional: internal timeout so requests don't hang forever
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                accept: "application/json",
            },
        });

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`TMDB error ${res.status}: ${text || res.statusText}`);
        }

        return type === "tv" ? (await res.json()) as DiscoverResponseTVShow : (await res.json()) as DiscoverResponse;
    }
    finally {
        clearTimeout(timeout);
    }
}

export const  searchMovies = async (query: string)=>{
    return await discoverByQuery(query, "movie") as DiscoverResponse;
}

export const  searchShows = async (query: string)=>{
    return await discoverByQuery(query, "tv") as DiscoverResponseTVShow;
}