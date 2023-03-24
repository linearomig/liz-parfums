import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const SetPassword = () => {

    const navigate = useNavigate();

    const [newPass, setNewPass] = useState("");
    const [newPassConfirm, setnewPassConfirm] = useState("");



    function handleSubmit(e) {
        e.preventDefault();
        if (!newPass | !newPassConfirm)
            swal("Complete la información");
        else if (newPass !== newPassConfirm)
            swal("Atención", "Las contraseñas deben coincidir", "error");

        else 
        swal("Contraseña actualizada")
        navigate("/perfil");
    }

    return (
        <div>
            <div className="container">
                <div className='conta'>

                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100 m-3">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                                        <h6 className="text-dark"><b>Cambiar contraseña</b></h6>

                                    </div>
                                    <form className="row g-3">
                                        <div className="col-6">
                                            <label htmlFor="newPass" className="form-label">Nueva Contraseña</label>
                                            <input type="password" className="form-control" id="newPass" value={newPass} onChange={(e) => [setNewPass(e.target.value)]} />
                                        </div>

                                        <div className="col-6">
                                            <label htmlFor="newPassConfirm" className="form-label">Confirmar Contraseña</label>
                                            <input type="password" className="form-control" id="newPassConfirm" value={newPassConfirm}  onChange={(e) => [setnewPassConfirm(e.target.value)]} />
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" class="btn btn-success" id="" onClick={handleSubmit}>Guardar Cambios</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SetPassword;