import React from "react";
import { Link } from "react-router-dom";
import { useFavoritosContext } from "../context/FavoritosContext";



export default function Favoritos() {
  const {favoritos} = useFavoritosContext()
  
    return (
      <div>
        <div className="container">
            <div className='conta'>
            <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100 m-3">
                  <div className="card-body">
                    <div className="account-settings">
                      <div className="user-profile">
                        <div className="user-avatar">
                          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="Maxwell Admin"/>
                        </div><br/>
                        <h5 className="user-name">Yuki Hayashi</h5>
                        <h6 className="user-email">yuki@test.com</h6>
                      </div>


                      <div className="favr text-center">
                      <a><p><Link to="/perfil">Mi Perfil</Link></p></a>
                      <a><p><Link to="/productos">Crear Productos</Link></p></a>
                      <a><p><Link to="/*">Cambiar Contraseña</Link></p></a>
                      <br/><br/><br/><br/><a><button className='btn btn-danger bot'><Link to="#"><b>Logout</b></Link></button></a>
                      </div>

                    </div>
                  </div>
                </div>
                </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100 m-3">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                    <h6 className="mb-2 text-dark text-center"><b>Mis favoritos</b></h6>

                        {favoritos.map((product) => {
                          <div className= "p-3 galeria grid-columns-5"
                          key={product.img}>{product.img} </div>
                        })}
                  </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div></div>
    );
  }