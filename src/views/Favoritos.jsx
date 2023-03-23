import React from "react";
import { Link } from "react-router-dom";

import { useFavoriteContext } from "../context/FavoriteContext";
import { formatCurrency } from "../plus/formatNumber";

import "../styles/view/liked.scss";

const Favoritos = () => {
  const { favorites, removeProductFromFavorites } = useFavoriteContext();

  return (
    
    <div className="container">
        <h5 className="title">Mis favoritos</h5>

        
        <div className="productList">
          {favorites.map((product) => {
            return (
              <div key={product.id}>
                <div className="row">
                  <div className="item">
                    <img src={product.img} alt={product.altProduct} />

                    <div className="info-product">
                      <p>
                        <b>{product.name}</b>
                        <br />
                        <span>
                          {product.brand} - {product.gender}
                        </span>
                      </p>
                      <p className="price">{formatCurrency(product.price)}</p>

                      <div className="d-flex justify-content-around">
                        <button className="btn btn-light bt">
                          <div>
                            <Link to={`/perfume/${product.name}`}>
                              Detalhes
                            </Link>
                          </div>
                        </button>

                        <button
                          onClick={() => removeProductFromFavorites(product)}
                        >
                          Remover de favoritos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  
  );
};

export default Favoritos;
