import { useContext } from "react";
import { createContext, useState } from "react";

export const FavContext = createContext()

FavContext.displayName = "Favorites"

export default function FavoriteProvider({children}){
    const [fav, setFav] = useState([])
    return (
    <FavContext.Provider value={{fav, setFav}}>
        {children}
    </FavContext.Provider>
    )
}

export function useFavContext() {
    const {fav, setFav} = useContext(FavContext)

    function addFav(newFav) {
        const repeatFav = fav.some(item => item.id === newFav.id);

        let newList = [...fav]

        if(!repeatFav) {
            newList.push(newFav);
            return setFav(newList)
        }

        newList = fav.filter(item => item.id != newFav.id);

        return setFav(newList)
    }
    return {fav, addFav}
}