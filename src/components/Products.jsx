import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { productList } from "../data";
import { formatNumber } from "../plus/formatNumber";
import { useCartContext } from "../context/CartContext";
import { useFavoriteContext } from "../context/FavoriteContext";

import "../styles/component/products.scss";

const Products = () => {
    const { addProductToCart } = useCartContext();
    const { favorites, addProductToFavorites, removeProductFromFavorites } = useFavoriteContext();

    const [search, setSearch] = useState('');

    //Filtered Products by Name
    const filtered = productList.filter((product) => {
        if (search === "") {
            return product;
        } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
            return product;
        }
    });

    
   

    return (
        <div className="container">
            <div className="conta">
                <div className="">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-4">
                            <form className="d-flex" role="select">
                                <select className="form-select">
                                    <option value="default">Ordernar por:</option>
                                    <option value="sortedDes">Precio de mayor a menor</option>
                                    <option value="sortedAsc"> Precio de menor a mayor </option>
                                    <option value="sortedAZ">Nombre A - Z</option>
                                    <option value="sortedZA" >Nombre Z - A</option>
                                </select>
                            </form>
                        </div>


                        <div className="col-lg-6 col-md-12 col-sm-4">
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control"
                                    placeholder="Busca por tu perfume favorito"
                                    type="text"
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                    }}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
            <div className="productList">
                {filtered.map((product) => {
                    const isFavorite = favorites.some(
                        (favorite) => favorite.id === product.id,
                    );

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
                                        <p className="price">${formatNumber(product.price)}</p>

                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-light bt">
                                                <div>
                                                    <Link to={`/perfume/${product.name}`}>
                                                        Ver detalhes
                                                    </Link>
                                                </div>
                                            </button>

                                            <button
                                                className={`corazon ${isFavorite ? "active" : ""}`}
                                                onClick={() => {
                                                    if (isFavorite) {
                                                        removeProductFromFavorites(product);
                                                        return;
                                                    }

                                                    addProductToFavorites(product);
                                                }}
                                            >
                                                <i className="fa-solid fa-heart fa-lg" />
                                            </button>

                                            <button onClick={() => addProductToCart(product)}>
                                                <i className="fa-solid fa-cart-plus fa-lg" />
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
        </div>
    );
};

export default Products;
