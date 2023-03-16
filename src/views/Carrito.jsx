import React from 'react';
import '../styles/view/carrito.scss'

function Carrito() {

  return (
    <div className='carro'>
        <div className='container'>
            <div className='container-fluid'>
              <h2 className='text-center p-3 texto'>Tu Carro está vacío</h2>
              <p>No hay artículos en su carrito</p>

              <div className='botao'>
                <a type="submit" className="btn btn-dark" href="/perfume">Revisar perfumes</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Carrito;