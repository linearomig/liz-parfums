import React from 'react';
import "../styles/component/footer.scss";
import { Link } from "react-router-dom";



function Footer() {
  return (

      
        <div className="footer">
          <p className='arriba'>LES PARFUMS DE LIZ <i className="fa-regular fa-copyright"></i>
          <br/><span className='abajo'>Todos los derechos reservados</span></p>
          
            <div className='loguinho'>
              <a><Link to="/" ><i className="fa-brands fa-instagram fa-lg"></i></Link></a>
              <a><Link to="/"><i className="fa-brands fa-square-facebook fa-lg"></i></Link></a>
              <a><Link to="/"><i className="fa-brands fa-tiktok fa-lg"></i></Link></a>
            </div>
        </div>
      
  )
}

export default Footer;