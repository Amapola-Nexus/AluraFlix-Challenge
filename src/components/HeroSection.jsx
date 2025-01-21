import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroStyles = styled.section`
    width: 100%;
    height: 23rem;
    display: flex;
    align-items: center;
    color: white;
    background-position: center;
    background-size: cover;


    article {
        width: 50%;
        margin-left: 1rem;
        padding: .7em .5em;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        text-shadow: 1px 1px 3px black;
    }

    img {
        grid-area: 1 / 1 / 2 / 2;
        width: 9rem;
        aspect-ratio: 4 / 5;
        object-fit: cover;
    }

    .info__container {
        grid-area: 1 / 2 / 2 / 3;
        display: flex;
        flex-direction: column;
        gap: .5em;

        h2 {
            max-width: 30ch;
        }

        span {
            padding: .1em .3em;
            border-radius: 10px;
            width: max-content;
            background-color: #5c5c5c;
        }

        .player__btn {
            background-color: white;
            display: flex;
            align-items: center;
            gap: .3em;
            color: black;
            width: max-content;
            white-space: nowrap;
            text-shadow: none;
            text-decoration: none;
            padding: .5em;
            border-radius: 5rem;
            cursor: pointer;
        }
    }

    p {
        grid-area: 2 / 1 / 3 / 3;
        text-wrap: balance;
        max-height: 5lh;
    }
`

function HeroSection({selectedMovie, inHome}) {
    return (
        <HeroStyles aria-label="Banner Principal" style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 70%), url(${selectedMovie.landscapeURL})`}}>
            <article>
                <img src={selectedMovie.posterURL}/>
                <div className="info__container">
                    <h2>{selectedMovie.title}</h2>
                    <span>{selectedMovie.genre}</span>
                    {inHome &&
                    <Link className="player__btn" to={`/${selectedMovie.id}`}> <IoMdPlay /> Ver tráiler</Link>}
                </div>
                <p>{selectedMovie.description}</p>
            </article>
        </HeroStyles>
    )
};

export default HeroSection