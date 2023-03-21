import React from "react";
import Products from "../components/Products";
import { FavoritosContext } from "../context/favoritosContext";
import '../styles/view/liked.scss';

const Liked = () => {
  const { favoritos } = useContext(FavoritosContext);

  return (

    <div className="container">

  
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                <h5 className="title">Mis favoritos</h5>
                <div className="container-fluid">
                  {favoritos.map((image) => <Products key={image.id} products={image} liked />)}
                </div>
              </div>
            </div>

  );
}

export default Liked