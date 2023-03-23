import React, { useState } from 'react';
import '../styles/view/login.scss';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PublicNavbar from '../components/PublicNavbar';
import Banner from '../components/Banner';



const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = login(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/productos");
  };



  return (
    <>

      <PublicNavbar />

      <Banner />

      <div className='container'>
        <h2 className='text-center p-3 texto'>¡Qué bueno tenerte de vuelta!</h2>
        <div className='quadrado'>
          <form >

            <div className="mb-3">
              <label htmlfor="email" className="form-label" >Correo electrónico</label>
              <input type="email" className="form-control" id="email" value={email} placeholder='Ingresa tu correo electrónico' onChange={(e) => [setEmail(e.target.value), setError("")]} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" value={password} placeholder='Ingresa tu contraseña' onChange={(e) => [setPassword(e.target.value), setError("")]} />
            </div>
            <div className='error-validation'>{error}</div>
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
              Acceder
            </button>
          </form>

          <p className='registro'>¿Aún no tienes cuenta? <Link to="/signin"><a><b>Regístrate</b></a></Link></p>
        </div>
      </div>
    </>
  )
}

export default Login;