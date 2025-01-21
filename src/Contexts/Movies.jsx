import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext()

export default function MoviesProvider({children}) {
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        fetch("https://my-json-server.typicode.com/Amapola-Nexus/Aluraflix-challenge-API/movies")
        .then(response => response.json())
        .then(data => {
            setMovies(data)})
    }, [])

    async function updateMovie(id, updatedMovie) {
        await fetch(`https://my-json-server.typicode.com/Amapola-Nexus/Aluraflix-challenge-API/movies/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedMovie)
        })
        .then(response => response.json())
        .then(data=> setMovies((prev) => prev.map((m) => (m.id === id ? data : m))))
        .catch(error => console.error(error))
    }

    async function deleteMovie(id) {
        await fetch(`https://my-json-server.typicode.com/Amapola-Nexus/Aluraflix-challenge-API/movies/${id}`, {
            method: 'DELETE'
        })
        .then(() => setMovies((prev)=> prev.filter((m)=> m.id !== id)))
        .catch(error => console.error(error))
    }

    async function newMovie(dataToSend) {
        const fetchData = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataToSend)
        }
        await fetch("https://my-json-server.typicode.com/Amapola-Nexus/Aluraflix-challenge-API/movies", fetchData)
        .then(response => response.json())
        .then(data=> setMovies((prev) => [...prev, data]))
        .catch(error => console.error(error))
    }

    return (
        <MoviesContext.Provider value={{movies, setMovies, updateMovie, deleteMovie, newMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}
