import React, { useState } from 'react';
import '../styles/view/login.scss';
import { Link } from 'react-router-dom';


const Login = () => {
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');








  return (
    
    <div>
      
        <div className='container'>
            <h2 className='text-center p-3 texto'>¡Qué bueno tenerte de vuelta!</h2>
            <div className='quadrado'>
              <form>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label" >Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder='Ingresa tu correo electrónico'/>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                  <input type="password" className="form-control ps1" id="clave" placeholder='Ingresa tu contraseña'/>
                </div>

                <a type="submit" className="btn btn-primary"><Link to="/">Ingresar</Link></a>
              </form>

              <p className='registro'>¿Aún no tienes cuenta? <Link to="/signin"><a><b>Regístrate</b></a></Link></p>
            </div>
        </div>
  </div>
  )
}

export default Login;