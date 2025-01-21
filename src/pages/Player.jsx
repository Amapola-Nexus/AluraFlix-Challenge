import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { useContext, useEffect, useRef } from "react";
import { MoviesContext } from "../Contexts/Movies";

function Player() {
    const params = useParams()
    const { movies } = useContext(MoviesContext)
    const movie = movies.find(movie => movie.id == params.id)

    const playerRef = useRef(null)

    const notReduced = window.matchMedia(`(prefers-reduced-motion: no-preference)`).matches === true || window.matchMedia(`(prefers-reduced-motion: no-preference)`) === true

    useEffect(()=> {
        playerRef.current.scrollIntoView({
            behavior: notReduced ? 'smooth' : 'auto'
        })
    }, [])


    return (
        <>
            <HeroSection selectedMovie={movie}/>
            <section style={{width: '100%', display: 'flex', justifyContent: 'center', marginBlock: '1rem'}}>
                <iframe
                    ref={playerRef}
                    style={{width: '80%', aspectRatio: '16/9'}}
                    src={movie.trailerURL}
                    title={movie.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
        </>
    )
}

export default Player