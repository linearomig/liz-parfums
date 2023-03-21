import React from "react"
import { FavoritosContext } from "./context/favoritosContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";
import { UserProvider } from "./context/UserContext";

import Footer from "./components/Footer";
import Nosotros from "./views/Nosotros";
import Signin from "./views/Signin";
import Header from "./components/Banner";
import Contacto from './views/Contacto';
import PublicNavbar from "./components/PublicNavbar";
import Login from "./views/Login";
import Home from "./views/Home";
import Perfil from "./views/Perfil";
import SingleProduct from "./views/SingleProduct";
import Error from "./views/Error";
import CrearProducto from "./views/CrearProductos";
import Cart from "./views/Cart";
import Liked from "./views/Liked";



export default function App() {

  return (
    <div className="App">

      <UserProvider>
      <ShopContextProvider>
          <FavoritosContext>
            <BrowserRouter>
              <PublicNavbar />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Public Routes*/}
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/perfume/:name" element={<SingleProduct />} />
                <Route path="/*" element={<Error />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/perfume/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signin" element={<Signin />} />
                
                
                {/* Proteted Routes*/}
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/favoritos" element={<Liked/>} />
                <Route path="/productos" element={<CrearProducto />} />
              </Routes>
              <Footer />
            </BrowserRouter>
            </FavoritosContext>
      </ShopContextProvider>
      </UserProvider>
    </div>
  );
};

