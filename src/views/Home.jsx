import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";


import '../styles/view/home.scss';
import PublicNavbar from "../components/PublicNavbar";


function Home() {

    return (
        <>
            
            <PublicNavbar/>

            <Banner />

            <Products />

            <section className="container">
                <div className="content d-none d-sm-block">
                    <div className="news">
                        <p>
                            Suscríbete a nuestro newsletter ahora y mantente al
                            día con nuevas colecciones y ofertas exclusivas.
                        </p>
                        <div className="container-fluid">
                            <input type="email" placeholder="Ingresa el correo aquí..." />
                            <button type="submit" value="send">Suscríbete</button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;
