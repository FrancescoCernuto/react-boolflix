import { createContext, useContext, useEffect, useState } from "react";

// Context Consumer
const MovieTvContext = createContext();
export const UseMovieTvContext = () => useContext(MovieTvContext);

//  Context Provider
export function MovieTvContextProvider({ children }) {
    const movieUrl = import.meta.env.VITE_API_URL_MOVIE;
}

