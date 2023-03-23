import React from 'react';
import Banner from '../components/Banner';
import PublicNavbar from '../components/PublicNavbar';



function Contacto() {
  return (

  <div>
    <PublicNavbar/>
      <Banner />
  
    <div className='container'>
      <div className='container-fluid'>
          <h2 className='text-center p-3 texto2'>Cuéntanos ¿En qué te podemos ayudar?</h2>
              <div className='quadro'>

                <form className="row g-3">
                    <div className="col-12">
                      <label for="inputAddress" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="Ingresa tu nombre"/>
                    </div>

                    <div className="col-12">
                      <label for="inputEmail4" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder='Ingresa tu correo electrónico'/>
                    </div>

                    <div class="mb-3">
                      <label for="formFileSm" class="form-label">Adjuntar archivo</label>
                      <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>

                    <div className="col-12">
                      <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-dark">Enviar mensaje</button>
                    </div>

                </form>
              </div>
      </div>
    </div>
    </div>
  );
}

export default Contacto;