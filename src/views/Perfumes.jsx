import React from "react";
import Products from "../components/Products";
import '../styles/view/home.scss';
import Banner from "../components/Banner";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Logo from '../assets/logo-liz.svg';



const Privado = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();


    return (
        <>

<nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-brand" href="/"><img src={Logo} alt="" className="d-inline-block align-text-center" href="/" /> Les Parfums de Liz </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="navbar-nav">
                        <li className="nav-item barra">
                            <a className="nav-link"><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> </a> <span className="sr-only">(current)</span>
                            <a className="nav-link"><NavLink to="/nosotros" className={({ isActive }) => isActive ? "active" : ""}>Nosotros</NavLink></a>
                            <a className="nav-link"><NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink> </a>
                            
                            <a className="nav-link"><NavLink to="/perfil" className={({ isActive }) => (isActive ? "active-className" : "")}>Perfil</NavLink> </a>
                            <a className="nav-link"><NavLink to="/favoritos" className={({ isActive }) => (isActive ? "active-className" : "")}>Favoritos</NavLink> </a>
                            <a className="nav-link carrito"> <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}> <i className="fa-solid fa-cart-shopping" /></NavLink> </a>
                        </li>
                        <button className='btn btn-danger bot' type="button" onClick={() => [signout(), navigate("/")]}> Logout </button>
                    </div>
                    
                </div></nav>
            
            <Banner />

            <Products />

            <section className="container">
                <div className="content d-none d-sm-block">
                    <div className="news">
                        <p>
                            Suscríbete a nuestro newsletter ahora y mantente al
                            día con nuevas colecciones y ofertas exclusivas.
                        </p>
                        <div className="">
                            <input type="email" placeholder="Ingresa el correo aquí..." />
                            <button type="submit" value="send">Suscríbete</button>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
};

export default Privado;

