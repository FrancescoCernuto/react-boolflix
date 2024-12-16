import { UseMovieTvContext } from "../contexts/MovieTvContext";

export default function Main() {
    const { movies, series, getMovieOriginCountry, movieOriginCountry } =
        UseMovieTvContext();