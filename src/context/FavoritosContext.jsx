import { createContext, useContext, useState } from "react";


export const FavoritosContext = createContext()

export default function FavoritosProvider({children}) {
    const [favoritos, setFavoritos] = useState([])


    const addFavoritos = (img) => {
        setFavoritos([...favoritos, {img}])
    }


    return (
        <FavoritosContext.Provider value={{favoritos, addFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}


export const useFavoritosContext = () => useContext(FavoritosContext);