import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



const CrearProducto = () => {

  const navigate = useNavigate();

  const [producto, setProducto] = useState("");
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    if (!producto | !brand | !gender | !price) 
        swal("Complete la información");
    else if (producto === producto, brand === brand, gender === gender, price === price)
    swal("Guardando producto...", "Aguarde algunos minutos mientras validamos todas las informaciones", "success")
    navigate("/");
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
                    <h6 className="text-dark"><b>Nuevo Producto</b></h6>

                  </div>
                  <form className="row g-3">
                    <div className="col-6">
                      <label htmlFor="productName" className="form-label">Nombre Producto</label>
                      <input type="text" className="form-control" id="productName" value={producto} required onChange={(e) => [setProducto(e.target.value)]}/>
                    </div>

                    <div className="col-6">
                      <label htmlFor="productBrand" className="form-label">Marca</label>
                      <input type="text" className="form-control" id="productBrand" value={brand} required onChange={(e) => [setBrand(e.target.value)]}/>
                    </div>

                    <div className="col-6">
                      <label htmlFor="productGender" className="form-label">Género</label>
                      <input type="text" className="form-control" id="productGender" value={gender} required onChange={(e) => [setGender(e.target.value)]}/>
                    </div>

                    <div className="col-6">
                      <label htmlFor="productPrice" className="form-label">Precio</label>
                      <input type="text" className="form-control" id="productPrice" value={price} required onChange={(e) => [setPrice(e.target.value)]}/>
                    </div>

                    <div class="mb-3">
                      <label htmlFor="formFileSm" class="form-label">Adjuntar Imagen</label>
                      <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>

                    <div className="col-12">
                      <label htmlFor="productDescription" class="form-label">Descripción</label>
                      <textarea class="form-control" id="productDescription" rows="2"></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit" class="btn btn-success" id="" onClick={handleSubmit}>Guardar Producto</button>
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

export default CrearProducto;