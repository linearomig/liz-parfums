import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Nosotros from "./views/Nosotros";
import Signin from "./views/Signin";
import Header from "./components/Banner";
import Contacto from './views/Contacto';
import PublicNavbar from "./components/PublicNavbar";
import Login from "./views/Login";
import Home from "./views/Home";
import Perfil from "./views/Perfil";
import Single from "./views/Single";
import Error from "./views/Error";
import Favoritos from "./views/Favoritos";
import CrearProducto from "./views/CrearProductos";


export default function App() {
  
  return ( 
    <div className="App">
      <BrowserRouter>
          <PublicNavbar/>
          <Header/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/perfume/" element={<Home />} />
                <Route path="/perfume/:name" element={<SingleProduct />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/*" element={<Error/>} />
                <Route path="/favoritos" element={<Favoritos/>} />
                <Route path="/productos" element={<CrearProducto/>} />
              </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
};

