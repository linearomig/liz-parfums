import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";

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
import Favoritos from "./views/Favoritos";
import CrearProducto from "./views/CrearProductos";
import Cart from "./views/Cart";
import FavoritosProvider from "./context/FavoritosContext";
import UserProvider from "./context/UserContext";




export default function App() {
  
  return ( 
    <div className="App">
      <ShopContextProvider>
        <FavoritosProvider>
        <UserProvider>
      <BrowserRouter>
          <PublicNavbar/>
          <Header/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/perfume/" element={<Home />} />
                <Route path="/perfume/:name" element={<SingleProduct />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/*" element={<Error/>} />
                <Route path="/favoritos" element={<Favoritos/>} />
                <Route path="/productos" element={<CrearProducto/>} />
              </Routes>
          <Footer/>
      </BrowserRouter>
      </UserProvider>
      </FavoritosProvider>
      </ShopContextProvider>
    </div>
  );
};

