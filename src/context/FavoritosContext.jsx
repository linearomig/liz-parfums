import { createContext, useContext, useState } from "react";


export const FavoritosContext = createContext()

export const FavoritosProvider = ({children}) => {

    const [favoritos, setFavoritos] = useState([])


    const addFavoritos = (info) => {
        setFavoritos([...favoritos, info])
    }

    const removeFavoritos = (id) => {
        setFavoritos(favoritos.filter((image) => image.id != id))
    }

    return (
        <FavoritosContext.Provider value={{ favoritos, addFavoritos, removeFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}




//export const useFavoritosContext = () => useContext(FavoritosContext);