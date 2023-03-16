import React from 'react';
import "../styles/component/banner.scss";
import banner from '../assets/banner.png';

function Header() {
  return (
    <div className='header'>
        <div className="row">
          <img className="big .col-none .col-sm|md|lg|xl|xxl"  
            src={banner}>
          </img>
        </div>
        
            <main className="main-content">
            <section className="container container-features">
                <div className="card-feature">
                    <i className="fa-solid fa-plane-up fa-lg"></i>
                    <div className="feature-content">
                        <span>Envío gratuito a Santiago</span>
                    </div>
                </div>
                <div className="card-feature">
                    <i className="fa-solid fa-wallet fa-lg"></i>
                    <div className="feature-content">
                        <span>Facilidad de pago</span>
                    </div>
                </div>
                <div className="card-feature">
                    <i className="fa-solid fa-gift fa-lg"></i>
                    <div className="feature-content">
                        <span>Tarjeta regalo especial</span>
                    </div>
                </div>
                <div className="card-feature">
                    <i className="fa-solid fa-headset fa-lg"></i>
                    <div className="feature-content">
                        <span>Servicio al cliente 24/7</span>
                    </div>
                </div>
            </section>
            </main> 

      
    </div>
  )
}

export default Header;