import React, { useState } from 'react';
import '../styles/view/login.scss';
import { Link } from 'react-router-dom';



const Login = ({ setAlert }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (email.trim() === "test@test.com" && password.trim() === "123456") {
      setAlert({ error: false, msg: "Login successful", color: "success" });
      // Reset form
      setEmail("");
      setPassword("");
      return;
    }
    setAlert({
      error: true,
      msg: "Credentials are not valid",
      color: "danger",
    });
  };

  return (

    <div>

      <div className='container'>
        <h2 className='text-center p-3 texto'>¡Qué bueno tenerte de vuelta!</h2>
        <div className='quadrado'>
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlfor="email" className="form-label" >Correo electrónico</label>
              <input type="email" className="form-control" id="email" value={email} placeholder='Ingresa tu correo electrónico' onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" value={password} placeholder='Ingresa tu contraseña' onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit"
              disabled={!email.trim() || !password.trim()}
              className="btn btn-primary">Acceder
            </button>
          </form>

          <p className='registro'>¿Aún no tienes cuenta? <Link to="/signin"><a><b>Regístrate</b></a></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login;