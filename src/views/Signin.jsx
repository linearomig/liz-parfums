import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/view/signin.scss';
import { Link } from 'react-router-dom';

const Signin =() => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();

      setError("")

      const user = {
        displayName,
        email,
        password
      }

      if(password !== confirmPassword) {
        setError("La contraseña debe ser la misma")
        return
      }
    }



  return (
    <div className='container'>
          <h2 className='text-center p-3 texto2'>¡Ingresa tus datos personales y disfruta de una experiencia de compra más rápida!</h2>
          <div className='quadro'>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label for="inputAddress" className="form-label">Nombre</label>
                      <input type="text" className='form-control' name='displayName' placeholder="Ingresa tu nombre" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                    </div>
                    <div className="col-md-12">
                      <label for="inputEmail4" className="form-label">Correo electrónico</label>
                      <input type="email" className='form-control' name='email' placeholder='Ingresa tu correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                      <label for="inputPassword4" className="form-label">Contraseña</label>
                      <input type="password" className='form-control' name='password' placeholder='Ingresa una contraseña' value={password} onChange={(e) => setPassword(e.target.value)}/> <span id="passwordHelpInline" className="form-text">Debe tener entre 8 y 20 caracteres. </span>
                    </div>
                    <div className="col-md-6">
                      <label for="inputPassword4" className="form-label">Confirma tu contraseña</label>
                      <input type="password" className='form-control' name='confirmPassword' placeholder='Confirma tu contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked/>
                        <label className="form-check-label" for="gridCheck"> Quiero recibir ofertas, novedades y promociones en mi correo electrónico.</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck"> Acepto los Términos y Condiciones y la Política de Privacidad de Datos.</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-danger"><Link to="/perfil">Registrarme</Link></button>
                    </div>
                    {error && <p className='error'>{error}</p>}
              </form>
          <p className='registro'>¿Ya tienes cuenta? <Link to="/login"><b>Inicia sesión</b></Link></p>
          </div>
    </div>
  )
}


export default Signin;