import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, updateCart] = useState([]);

    const addProductToCart = useCallback((product) => {
        updateCart((prevState) => {
            const prodIndex = prevState.findIndex((prod) => prod.id === product.id);
            if (prodIndex !== -1) {
                return prevState.map((prod, index) => {
                    if (index === prodIndex) {
                        const { quantity = 0 } = prod;
                        return { ...prod, quantity: quantity + 1 };
                    }

                    return prod;
                });
            }

            return [...prevState, { ...product, quantity: 1 }];
        });
    }, []);

    const removeProductFromCart = useCallback((product) => {
        updateCart((prevState) => {
            const currentProduct = prevState.find((prod) => prod.id === product.id);
            if (currentProduct.quantity === 1) {
                return prevState.filter((prod) => prod.id !== product.id);
            }

            return prevState.map((prod) => {
                if (prod.id === product.id) {
                    return { ...prod, quantity: prod.quantity - 1 };
                }

                return prod;
            });
        });
    }, []);

    const updateProductOnCart = useCallback((product, quantity) => {
        updateCart((prevState) => {
            if (quantity === 0) {
                return prevState.filter((prod) => prod.id !== product.id);
            }

            return prevState.map((prod) => {
                if (prod.id === product.id) {
                    return { ...prod, quantity };
                }

                return prod;
            });
        });
    }, []);

    return (
        <CartContext.Provider
            value={{
                cart,
                addProductToCart,
                removeProductFromCart,
                updateProductOnCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
