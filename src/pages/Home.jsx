import { useContext, useEffect, useMemo, useState } from "react";
import HeroSection from "../components/HeroSection";
import Scroller from "../components/Scroller";
import { MoviesContext } from "../Contexts/Movies";
import MovieCard from "../components/MovieCard";

function Home() {
    const { movies } = useContext(MoviesContext);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const memoizedSelectedMovie = useMemo(() => {
        if (movies.length) {
            return movies[Math.floor(Math.random() * movies.length)];
        }
        return null;
    }, [movies]);


    useEffect(() => {
        setSelectedMovie(memoizedSelectedMovie);
    }, [memoizedSelectedMovie]);


    // function getRandomMovie(array) {
    //     const randomMovie = array[Math.floor(Math.random() * array.length)]
    //     return randomMovie;
    // }

    const unsortGenres = movies ? Array.from(new Set(movies.map(({ genre }) => genre))) : [];
    const genres = unsortGenres.sort();

    const filteredMoviesByGenre = useMemo(() => {
        const result = {};
        genres.forEach((genre) => {
            result[genre] = movies.filter((movie) => movie.genre === genre);
        });
        return result;
    }, [movies, genres]);
        
    
    return(
    <> 
        {movies && movies.length > 0 && selectedMovie && <HeroSection selectedMovie={selectedMovie} inHome/>}
        {movies && movies.length > 0 && selectedMovie && genres.map((genre)=> {
            const filteredMovies = filteredMoviesByGenre[genre];
            return(
                <Scroller key={genre}>
                <h3>{genre}</h3>
                <ul>
                    { filteredMovies.map((movie) => {
                        return <MovieCard {...movie}
                        key={movie.id}/>
                    })}
                </ul>
                </Scroller>
            )
        })}
    </>
    )
};

export default Home