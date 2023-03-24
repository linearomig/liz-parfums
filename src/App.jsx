import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";

import Footer from "./components/Footer";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";
import Home from "./views/Home";
import Perfil from "./views/Perfil";
import SingleProduct from "./views/SingleProduct";
import Error from "./views/Error";
import CrearProducto from "./views/CrearProductos";
import Cart from "./views/Cart";
import Favoritos from "./views/Favoritos";
import PublicNavbar from "./components/PublicNavbar";
import Banner from "./components/Banner";
import Signin from "./views/Signin";
import Login from "./views/Login";
import SetPassword from "./views/SetPassword";




export default function App() {


  return (

    <div className="App">


      <AuthProvider>
        <FavoriteProvider>
          <CartProvider>
            <BrowserRouter>
              <PublicNavbar />
              <Banner />
              <Routes>

                {/* Public Routes*/}
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Error />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/perfume/:name" element={<SingleProduct />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />


                {/* Proteted Routes*/}

                <Route path="/cart" element={<Cart />} />
                <Route path="/favoritos" element={<Favoritos/>} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/new-product" element={<CrearProducto />} />
                <Route path="/set-password" element={<SetPassword />} />

              </Routes>
              <Footer />

            </BrowserRouter>
          </CartProvider>
        </FavoriteProvider>
      </AuthProvider>

    </div>
  );
}
