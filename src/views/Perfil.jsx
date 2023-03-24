import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import '../styles/view/perfil.scss';
import useAuth from "../components/useAuth";



function Perfil() {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (

    <>


      <div className="container">
        <div className='conta'>
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card m-3">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" />
                      </div><br />
                      <div className="favr text-center">
                        <a className="nav-link"><NavLink to="/favoritos" className={({ isActive }) => isActive ? "active" : ""}>Mis Favoritos</NavLink></a>
                        <a className="nav-link"><NavLink to="/new-product" className={({ isActive }) => isActive ? "active" : ""}>Crear Producto</NavLink></a>
                        <a className="nav-link"><NavLink to="/set-password" className={({ isActive }) => isActive ? "active" : ""}>Cambiar Contraseña</NavLink></a>
                        <br /><br /><br /><br /><button className='btn btn-danger bot' type="button" onClick={() => [signout(), navigate("/")]}><b>Salir</b></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card  m-3">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                      <h6 className="mb-2 text-dark"><b>Perfil</b></h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                      <div className="form-group">
                        <label for="fullName">Nombre</label>
                        <input type="text" className="form-control" id="fullName"></input> 
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                      <div className="form-group">
                        <label for="eMail">Email</label>
                        <input type="email" className="form-control" id="eMail"></input> 
                      </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                      <div className="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" className="form-control" id="password"></input>
                      </div>
                    </div>
                  </div>
                  <div className="row gutters p-2">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                      <h6 className="mt-3 mb-2 text-dark"><b>Dirección</b></h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                      <label for="region">Región</label>
                      <select className="form-select">
                        <option selected></option>
                        <option>RM (Metropolitana)</option>
                        <input type="text" id="region" placeholder="Región" />
                      </select>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                      <label for="comuna">Comuna</label>
                      <select className="form-select">
                        <option selected></option>
                        <option value='1'>Providencia</option>
                        <option value='2'>La Reina</option>
                        <option value='3'>Ñuñoa</option>
                        <input type="text" id="comuna" placeholder="Comuna" />
                      </select>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                      <div className="form-group">
                        <label for="calle">Calle</label>
                        <input type="text" className="form-control" id="calle" placeholder="Escribe solo el nombre de la calle o avenida" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                      <div className="form-group">
                        <label for="numero">Número</label>
                        <input type="text" className="form-control" id="numero" placeholder="número" />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right">
                        <button type="submit" id="submit" name="submit" className="btn btn-secondary">Cancelar</button>
                        <button type="submit" id="submit" name="submit" className="btn btn-primary ms-2">Actualizar datos</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;