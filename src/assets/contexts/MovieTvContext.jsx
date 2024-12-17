import { createContext, useContext, useEffect, useState } from "react";

// Context Consumer
const MovieTvContext = createContext();
export const UseMovieTvContext = () => useContext(MovieTvContext);

//  Context Provider
export function MovieTvContextProvider({ children }) {

    const VITE_API_URL_MOVIE = "https://api.themoviedb.org/3/search/movie";
    const VITE_API_URL_MOVIE_GENRE =
        "https://api.themoviedb.org/3/genre/movie/list";
    const VITE_API_URL_SERIE = "https://api.themoviedb.org/3/search/tv";
    const VITE_API_KEY =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWNlMzlkNjVkYjQ0NTljMGVmYmVhODMxZmQ3NGJkNyIsIm5iZiI6MTczNDM0NDcxNi45ODg5OTk4LCJzdWIiOiI2NzYwMDAwYzk2Y2ZkZGJmMTljY2Q2NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-zluL97uiaR_nGLE_BhZJ2Ijv8FCDyGxWVJJVo0LM5Q";


    const movieUrl = import.meta.env.VITE_API_URL_MOVIE;
    const movieDetailUrl = import.meta.env.VITE_API_URL_MOVIE_DETAILS;
    const serieUrl = import.meta.env.VITE_API_URL_SERIE;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_API_KEY,
        },
    };

    const [movieTvData, setMovieTvData] = useState({
        movies: [],