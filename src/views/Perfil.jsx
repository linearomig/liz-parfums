import React from 'react'
import '../styles/view/perfil.scss';
import { Link } from 'react-router-dom';

function Perfil() {

  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }


  return (

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
                <a><p><Link to="/favoritos">Mis Favoritos</Link></p></a>
                <a><p><Link to="/productos">Crear Productos</Link></p></a>
                <a><p><Link to="/*">Cambiar Contraseña</Link></p></a>
                <br/><br/><br/><br/><button className='btn btn-danger bot' type="button" onClick={handleLogout}><b>Logout</b></button>
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
                  <h6 className="mb-2 text-dark"><b>Perfil</b></h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                  <div className="form-group">
                    <label for="fullName">Nombre</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name"/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                  <div className="form-group">
                    <label for="eMail">Email</label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID"/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                  <div className="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone number"/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                  <div className="form-group">
                    <label for="website">Website URL</label>
                    <input type="url" className="form-control" id="website" placeholder="Website url"/>
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
                    <input type="text" id="region" placeholder="Región"/>
                  </select>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                <label for="comuna">Comuna</label>
                  <select className="form-select">
                    <option selected></option>
                    <option value='1'>Providencia</option>
                    <option value='2'>La Reina</option>
                    <option value='3'>Ñuñoa</option>
                    <input type="text" id="comuna" placeholder="Comuna"/>
                  </select>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                  <div className="form-group">
                    <label for="calle">Calle</label>
                    <input type="text" className="form-control" id="calle" placeholder="Escribe solo el nombre de la calle o avenida"/>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                  <div className="form-group">
                    <label for="numero">Número</label>
                    <input type="text" className="form-control" id="numero" placeholder="número"/>
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                    <button type="button" id="submit" name="submit" className="btn btn-primary ms-2">Update</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
      </div>
      </div> 
      </div>     
    </div>
  );
}

export default Perfil;