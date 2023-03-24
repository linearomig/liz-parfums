import React from 'react';
import { useState } from 'react';
import '../styles/view/signin.scss';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../components/useAuth';



const Signin = () => {

   
    const [email, setEmail] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signin } = useAuth();

    function handleSubmit (e) {
        e.preventDefault();
        if (!email | !password | !passwordConfirmation) {
            swal("Agregue sus datos");
            return;
        } else if (password !== passwordConfirmation) {
            swal("Las contraseñas deben ser iguales");
            return;
        }

        const res = signin(email, password);

        if (res) {
            setError(res);
            return;
        }

        swal("Usuario creado!");
        navigate("/");
    };


    return (

        <>

            <div className='container'>
                <h2 className='text-center p-3 texto2'>¡Ingresa tus datos personales y disfruta de una experiencia de compra más rápida!</h2>
                <div className='quadro'>
                    <form className="row g-3" id="register-form" action="">

                        <div className="col-12">
                            <label for="email">E-mail</label>
                            <input className='form-control' type="email" required id="email" placeholder="Correo electrónico" onChange={(e) => [setEmail(e.target.value), setError("")]}></input>
                        </div>

                        <div className="col-md-6">
                            <label for="password">Contraseña</label>
                            <input className='form-control' type="password"  id="password" placeholder="Agregue una contraseña" onChange={(e) => [setPassword(e.target.value), setError("")]}></input>
                        </div>

                        <div className="col-md-6">
                            <label for="passconfirmation">Confirma tu contraseña</label>
                            <input className='form-control' type="password"  id="passwordconfirmation" placeholder="Por favor, confirme su contrasena" data-equal="password" onChange={(e) => [setPasswordConfirmation(e.target.value), setError("")]}></input>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked />
                                <label className="form-check-label" for="gridCheck"> Quiero recibir ofertas, novedades y promociones en mi correo electrónico.</label>
                            </div>
                        </div>

                        <div className="col-2">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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