import React from 'react';
import { useState } from 'react';
import '../styles/view/signin.scss';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PublicNavbar from '../components/PublicNavbar';
import Banner from '../components/Banner';



const Signin = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signin } = useAuth();

  const handleSignup = () => {
    if (!email | !name | !password | !passwordConfirmation) {
      setError("Faltan datos");
      return;
    } else if (password !== passwordConfirmation) {
      setError("Las contraseñas no son iguales");
      return;
    }

    const res = signin(email, name, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuario creado!");
    navigate("/productos");
  };


  return (

<>
    <PublicNavbar />

    <Banner />

    <div className='container'>
      <h2 className='text-center p-3 texto2'>¡Ingresa tus datos personales y disfruta de una experiencia de compra más rápida!</h2>
      <div className='quadro'>
        <form className="row g-3" id="register-form" action="">

          <div className="col-12">
            <label for="email">E-mail</label>
            <input className='form-control' type="email" name="email" id="email" placeholder="Correo electrónico" onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
          </div>

          <div className="col-md-6">
            <label for="name" >Nombre</label>
            <input className='form-control' type="text" name="name" id="name" placeholder="Nombre" data-required data-min-length="3" data-max-length="16" onChange={(e) => [setName(e.target.value)]}></input>
          </div>

          <div className="col-md-6">
            <label for="lastname">Apellido</label>
            <input className='form-control' type="text" name="lastname" id="lastname" placeholder="Apellido" data-required data-only-letters></input> 
          </div>

          <div className="col-md-6">
            <label for="password">Contraseña</label>
            <input className='form-control' type="password" name="password" id="password" placeholder="Agregue una contraseña" onChange={(e) => [setPassword(e.target.value), setError("")]}></input>
          </div>

          <div className="col-md-6">
            <label for="passconfirmation">Confirma tu contraseña</label>
            <input className='form-control' type="password" name="passconfirmation" id="passwordconfirmation" placeholder="Por favor, confirme su contrasena" data-equal="password" onChange={(e) => [setPasswordConfirmation(e.target.value), setError("")]}></input> 
          </div>

          
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked />
              <label className="form-check-label" for="gridCheck"> Quiero recibir ofertas, novedades y promociones en mi correo electrónico.</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck"> Acepto los Términos y Condiciones y la Política de Privacidad de Datos.</label>
            </div>
          </div>
          <div className="col-2">
          <button type="submit" className="btn btn-primary" onClick={handleSignup}>
             Registrar
            </button>
          </div>
        </form>

        <p className='registro'>¿Ya tienes cuenta? <Link to="/login"><b>Inicia sesión</b></Link></p>

        <div className='error-validation'>{error}</div>
      </div>
    </div>
    </>
  )
}


export default Signin;