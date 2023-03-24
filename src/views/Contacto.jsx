import React from 'react';
import { useNavigate } from 'react-router-dom';




const Contacto = () => {

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    swal("¡Mensaje enviado!");
    navigate("/");
  }

  return (

    <div>

      <div className='container'>
        <div className='container-fluid'>
          <h2 className='text-center p-3 texto2'>Cuéntanos ¿En qué te podemos ayudar?</h2>
          <div className='quadro'>

            <form onSubmit={handleSubmit}>
              <div className="row g-2 p-3">
              <div className="col-12">
                <label for="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" required placeholder="Ingresa tu nombre" />
              </div>

              <div className="col-12">
                <label for="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" required placeholder='Ingresa tu correo electrónico' />
              </div>

              <div class="mb-3">
                <label for="formFileSm" class="form-label">Adjuntar archivo</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file" />
              </div>

              <div className="col-12">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea class="form-control" id="mensaje" required rows="3"></textarea>
              </div>

              <div className="col-12">
                <button type="submit" class="btn btn-dark" value="OK">Enviar Mensaje</button>
              </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;