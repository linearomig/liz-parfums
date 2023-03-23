import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Footer from "./components/Footer";
import Nosotros from "./views/Nosotros";
import Signin from "./views/Signin";
import Header from "./components/Banner";
import Contacto from "./views/Contacto";
import PublicNavbar from "./components/PublicNavbar";
import Login from "./views/Login";
import Home from "./views/Home";
import Perfil from "./views/Perfil";
import SingleProduct from "./views/SingleProduct";
import Error from "./views/Error";
import CrearProducto from "./views/CrearProductos";
import Cart from "./views/Cart";
import Favoritos from "./views/Favoritos";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import Privado from "./views/Perfumes";







export default function App() {
  return (
    <div className="App">
      
      <AuthProvider>
        <CartProvider>
        <FavoriteProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>

                <Route path="/" element={<Home />} />

                {/* Public Routes*/}
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/perfume/:name" element={<SingleProduct />} />
                <Route path="/*" element={<Error />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />

                {/* Proteted Routes*/}
                
                <Route path="/cart" element={<Cart />} />
                <Route path="/productos" element={<Privado />} />
                <Route path="/perfil" element={<Perfil/>} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/new-product" element={<CrearProducto/>} />
                
              </Routes>
              <Footer />
            </BrowserRouter>
            </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}
