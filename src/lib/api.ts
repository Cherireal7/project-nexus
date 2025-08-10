import * as process from "node:process";

export const getPopularMovies = async () => {

    const url = `${process.env.API_URL}/movie/popular?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };

    try {
        const res =  await fetch(url, options);

        return await res.json();
    } catch (err) {
        return console.error(err);
    }
}

export const getMovie = async (id: string | number) => {

    const url = `${process.env.API_URL}/movie/${id}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };

    try {
        const res =  await fetch(url, options);

        return await res.json();
    } catch (err) {
        return console.error(err);
    }
}
