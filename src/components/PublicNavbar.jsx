import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from '../assets/logo-liz.svg';
import '../styles/component/publicNavbar.scss';
import useAuth from "./useAuth";


const PublicNavbar = () => {

    const { signed } = useAuth()
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand" href="/"><img src={Logo} alt="" className="d-inline-block align-text-center" href="/" /> Les Parfums de Liz </div>


                    <div className="navbar-nav">
                        <li className="barra">
                            <a className="nav-link"><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> </a>
                            <a className="nav-link"><NavLink to="/nosotros" className={({ isActive }) => isActive ? "active" : ""}>Nosotros</NavLink></a>
                            <a className="nav-link"><NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink> </a>

                            {signed
                                ?
                                <>
                                    <a className="nav-link"><NavLink to="/favoritos" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-heart" /></NavLink></a> <br />

                                    <a className="nav-link"><NavLink to="/perfil" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-user" /></NavLink> </a>
                                    <a className="nav-link"><NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-cart-plus" /></NavLink> </a>
                                    <button className='btn btn-dark btn-logout' onClick={() => [signout(), navigate("/")]} >Cerrar sesión	</button>
                                </>
                                :
                                <a className="nav-link"><NavLink to="/login" className={({ isActive }) => (isActive ? "active-className" : "")}><i className="fa-solid fa-right-to-bracket"></i></NavLink> </a>
                            }
                        </li>

                    </div>



                </div>
            </nav>

        </>
    );
}

export default PublicNavbar;
