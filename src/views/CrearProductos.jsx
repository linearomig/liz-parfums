import React from "react";
import { Link } from "react-router-dom";

function CrearProducto() {

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

  const alert = (message, type) => {
  const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
  }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        alert('Guardando producto', 'success')
      })
    }



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
                      <a><p><Link to="/favoritos">Mis Favoritos</Link></p></a>
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
                    <h6 className="text-dark"><b>Nuevo Producto</b></h6>

                  </div>
                  <form className="row g-3">
                    <div className="col-6">
                      <label for="productName" className="form-label">Nombre Producto</label>
                      <input type="text" className="form-control" id="productName"/>
                    </div>

                    <div className="col-6">
                      <label for="productBrand" className="form-label">Marca</label>
                      <input type="text" className="form-control" id="productBrand"/>
                    </div>

                    <div className="col-6">
                      <label for="productGender" className="form-label">Género</label>
                      <input type="text" className="form-control" id="productGender"/>
                    </div>

                    <div className="col-6">
                      <label for="productPrice" className="form-label">Precio</label>
                      <input type="text" className="form-control" id="productPrice"/>
                    </div>

                    <div class="mb-3">
                      <label for="formFileSm" class="form-label">Adjuntar Imagen</label>
                      <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>

                    <div className="col-12">
                      <label for="productDescription" class="form-label">Descripción</label>
                      <textarea class="form-control" id="productDescription" rows="2"></textarea>
                    </div>

                    <div className="col-12">
                        <div id="liveAlertPlaceholder"></div>
                        <button type="button" class="btn btn-success" id="liveAlertBtn">Guardar Producto</button>
                    </div>

                </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div></div>
    
  );
}

export default CrearProducto;