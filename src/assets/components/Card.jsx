export default function Card() {
    const VITE_POSTER_URL = "https://image.tmdb.org/t/p";
    const VITE_POSTER_SIZE = "/w342/";
    const posterOrigin = VITE_POSTER_URL;
    const posterSize = VITE_POSTER_SIZE;
    const posterPath = item.poster_path;
    let posterUrl;
    if (posterPath) posterUrl = posterOrigin + posterSize + posterPath;


    function raiting(vote) {
        if (!vote || vote < 0) vote = 0;
        const stars = Math.round(vote / 2);
        const totalStars = 5;
        const starsArr = [];
        for (let i = 0; i < totalStars; i++) {
            i < stars
                ? starsArr.push(<i key={i} className="fa-solid fa-star"></i>)
                : starsArr.push(<i key={i} className="fa-regular fa-star"></i>);

        }
    }

    function languageToFlag(language) {
        switch (language) {
            case "en":
                language = "US";
                break;
        }