import React from "react";
import Products from "../components/Galeria";
import '../styles/view/home.scss';


export default function Home (){
    return (
        <>

        <section>
        <div className="container">
           <div className="row">
            <div className="filtros">
                <div className="col-md-3">
                    <select className="form-select">
                        <option selected>Filtrar</option>
                        <option value="1">Recomendados</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <select className="form-select">
                        <option selected>Ordenar productos</option>
                        <option value="1">Recomendados</option>
                        <option value="2">Menor precio</option>
                        <option value="3">Mayor precio</option>
                    </select>
                </div>

                <div className="col-md-5">
                    <form className="d-flex" role="search">
                    <input className="form-control" type="search" placeholder="Buscar producto" aria-label="Search"/>
                    <button className="btn btn-dark" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </section>
        
        
        <Products />
           
            <section className="container">
                <div className="content">
					<div className="news">
						<p>
						Suscríbete a nuestro newsletter ahora y mantente al
						día con nuevas colecciones y ofertas exclusivas.
						</p>
                        <div className="">
						<input type="email" placeholder="Ingresa el correo aquí..."/>
                        <button>Suscríbete</button>
                        </div>
					</div>
					</div>
            </section>
        
        </>
    );
};


