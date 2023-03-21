import React from "react";
import '../styles/component/publicNavbar.scss';
import Logo from './../assets/logo-liz.svg';
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";



  export default function PublicNavbar() {
    const { user, setUser } = useUserContext();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" className="d-inline-block align-text-center" href="/" /> Les Parfums de Liz </a>


        <div className="navbar-nav barra">
          <a className="nav-link"><NavLink to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""}>Home</NavLink>
          </a>

          <a className="nav-link"><NavLink to="/nosotros"
            className={({ isActive }) =>
              isActive ? "active" : ""}>Nosotros</NavLink>
          </a>

          <a className="nav-link"><NavLink to="/contacto"
            className={({ isActive }) =>
              isActive ? "active" : ""}>Contacto</NavLink>
          </a>


          <a className="nav-link carrito"><NavLink to="/cart" className={({ isActive }) =>
            isActive ? "active" : ""}><i className="fa-solid fa-cart-shopping"></i></NavLink>
          </a>

          <div className="cartAmount">0</div>

            <a className="nav-link"><NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-class" : "")}><i className="fa-solid fa-right-to-bracket"></i></NavLink>
            </a>

            <div>
              <a className="nav-link"><NavLink to="/favoritos"
                className={({ isActive }) => (isActive ? "active-class" : "")}>Favoritos</NavLink></a>

              <a className="nav-link"><NavLink to="/perfil"
                className={({ isActive }) => (isActive ? "active-class" : "")}>User</NavLink></a>
            </div>
          
        </div>

      </div>
    </nav>
  );
}

