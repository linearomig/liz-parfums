import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, updateFavorite] = useState([]);

    const addProductToFavorites = (product) => {
        updateFavorite((prevState) => [...prevState, product]);
    };

    const removeProductFromFavorites = (product) => {
        updateFavorite((prevState) =>
            prevState.filter((prod) => prod.id !== product.id),
        );
    };


    return (
        <FavoriteContext.Provider
            value={{ favorites, addProductToFavorites, removeProductFromFavorites }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavoriteContext = () => useContext(FavoriteContext);
