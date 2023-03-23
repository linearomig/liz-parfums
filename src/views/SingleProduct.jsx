import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { productList } from "../data";
import { formatCurrency } from "../plus/formatNumber";
import { useFavoriteContext } from "../context/FavoriteContext";
import { useCartContext } from "../context/CartContext";
import PublicNavbar from "../components/PublicNavbar";
import Banner from "../components/Banner";

import "../styles/view/singleProduct.scss";


const SingleProduct = () => {
  const { name } = useParams();
  const { addProductToCart } = useCartContext();
  const { favorites, addProductToFavorites, removeProductFromFavorites } =
    useFavoriteContext();
  const product = useMemo(
    () => productList.find((product) => product.name === name),
    [name],
  );
  const isFavorite = useMemo(
    () => favorites.some((favorite) => favorite.id === product.id),
    [favorites],
  );

  return (
    <div>
      <PublicNavbar />
      <Banner />

      <div className="row">
        <div className="col-sm-6">
          <div className="card border-0">
            <div className="card-body">
              <div className="foto__producto text-center">
                <img src={product.img} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card border-0">
            <div className="card-body">
              <div className="info__producto">
                <i className="fa-solid fa-left-long"></i>
                <Link to="/perfume"> Volver a Perfumes </Link>
                <br />
                <br />
                <br />
                <h4>{product.name}</h4>
                <p>{product.brand}</p>

                <p>
                  <i className="fa-solid fa-hand-holding-heart"></i> Regalo{" "}
                  {product.gender}
                </p>

                <h5>Descripción</h5>
                <p>{product.description}</p>

                <br />
                <h5>Precio</h5>
                <p>{formatCurrency(product.price)}</p>
              </div>

              <button
                onClick={() => {
                  if (isFavorite) {
                    removeProductFromFavorites(product);
                    return;
                  }

                  addProductToFavorites(product);
                }}
              >
                {isFavorite ? "Remover" : ""} Favorito{" "}
              </button>

              <div className="row">
                <div className="text-right">
                  <button
                    className="addToCartBttn"
                    onClick={() => addProductToCart(product)}
                  >
                    <i className="fa-solid fa-cart-plus fa-2xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
