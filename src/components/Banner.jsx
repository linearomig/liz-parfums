import React from 'react';
import "../styles/component/banner.scss";

function Banner() {
    return (
        <>
            <div className="row">
                <div className='banner ' />

                <div className='linha d-none d-sm-block col-md-12'>
                    <div className="container-fluid">
                        <div className='faixa'>
                            <div className='beneficios'>
                                <i className="fa-solid fa-plane-up fa-lg"></i>
                                <div className="feature-content">
                                    <span>Envío gratuito a Santiago</span>
                                </div>
                            </div>
                            <div className='beneficios'>
                                <i className="fa-solid fa-wallet fa-lg"></i>
                                <div className="feature-content">
                                    <span>Facilidad de pago</span>
                                </div>
                            </div>
                            <div className='beneficios'>
                                <i className="fa-solid fa-gift fa-lg"></i>
                                <div className="feature-content">
                                    <span>Tarjeta regalo especial</span>
                                </div>
                            </div>
                            <div className='beneficios'>
                                <i className="fa-solid fa-headset fa-lg"></i>
                                <div className="feature-content">
                                    <span>Servicio al cliente 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;