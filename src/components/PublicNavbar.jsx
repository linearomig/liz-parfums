import React from "react";
import '../styles/component/publicNavbar.scss';
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo-liz.svg';

export default function PublicNavbar() {


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-brand" href="/"><img src={Logo} alt="" className="d-inline-block align-text-center" href="/" /> Les Parfums de Liz </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="navbar-nav">
                    <li className="barra">
                        <a className="nav-link"><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> </a> <span className="sr-only">(current)</span>
                        <a className="nav-link"><NavLink to="/nosotros" className={({ isActive }) => isActive ? "active" : ""}>Nosotros</NavLink></a>
                        <a className="nav-link"><NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink> </a>

                        <a className="nav-link"><NavLink to="/login" className={({ isActive }) => (isActive ? "active-className" : "")}><i className="fa-solid fa-right-to-bracket"></i></NavLink> </a>
                        <a className="nav-link"><NavLink to="/signin" className={({ isActive }) => (isActive ? "active-className" : "")}><i className="fa-solid fa-user-plus"></i></NavLink> </a>

                    </li>
                </div>



            </div>
        </nav>
    );
}

