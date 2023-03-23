import React from 'react';
import "../styles/component/footer.scss";
import { Link } from "react-router-dom";



function Footer() {
  return (

    <div className="row">
        <div className="footer">
          <p className='arriba'>LES PARFUMS DE LIZ <i className="fa-regular fa-copyright"></i>
          <br/><span className='abajo'>Todos los derechos reservados</span></p>
          
        </div>
        </div>
  )
}

export default Footer;