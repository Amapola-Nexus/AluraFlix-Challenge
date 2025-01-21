import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { useFavContext } from "../Contexts/Favorites"

const FavUl = styled.ul`
    width: 100%;
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-block: 20px;
    padding-left: 1rem;
`

function Favorites() {
    const {fav} = useFavContext();
    const favorites = fav.map((fav) => {
        return <MovieCard {...fav} key={fav.id}/>
    })

    return (
        <>
        <header style={{textAlign: 'center'}}>
            <h1 style={{color: 'white', marginTop: '20px', paddingLeft: '1rem'}}>Tus favoritos</h1>
        </header>

        {favorites.length ?
            <FavUl>
                { favorites }
            </FavUl> :
            <p style={{color: 'white', marginTop: '20px', paddingInline: '1rem', textAlign: 'center'}}>¡No hay nada aquí!</p>
        }

        </>
    )
}

export default Favorites