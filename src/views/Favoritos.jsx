import React, { useState } from "react";
import { productList } from "../data";
import '../styles/view/liked.scss';



const Favoritos = () => {

  const [favorite, setFavorite] = useState([]);


  //Remove Favorites:
  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

  //List of Products:
  let findfavorite = productList.filter(product => favorite.includes(product.id));


  return (

    <div className="container">

      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
        <h5 className="title">Mis favoritos</h5>
        <div className="container-fluid">

          {findfavorite.map((product) => {
            return (
              <div key={product.id}>

                <div className='row'>
                  <div className="item">
                    <img src={product.img} alt={product.altProduct} />

                    <div className="info-product">
                      <p><b>{product.name}</b>
                        <br /><span>{product.brand} - {product.gender}</span></p>
                      <p className="price">${formatNumber(product.price)}</p>

                      <div className="d-flex justify-content-around mb-3">
                        <button
                          className="btn btn-light bt">
                          <div><Link to={`/perfume/${product.name}`}>
                            Ver detalhes</Link></div>
                        </button>

                        <button onClick={() => removeFavorite(product.id)}>
                        remove favorite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>


  );
}

export default Favoritos;