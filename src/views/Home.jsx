import React from "react";
import Products from "../components/Products";
import '../styles/view/home.scss';


export default function Home() {

    return (
        <>

            <Products />

            <section className="container">
                <div className="content">
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


