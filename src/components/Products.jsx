import React, { useState } from "react";
import { Link } from "react-router-dom";

import { productList } from "../data";
import { formatNumber } from "../plus/formatNumber";
import { useCartContext } from "../context/CartContext";
import { useFavoriteContext } from "../context/FavoriteContext";

import "../styles/component/products.scss";



const Products = () => {

    const { addProductToCart } = useCartContext();
    const { favorites, addProductToFavorites, removeProductFromFavorites } = useFavoriteContext();

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState()

    //Filtered Products by Name
    const filtered = productList.filter((product) => {
        if (search === "") {
            return product;
        } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
            return product;
        }
    })
    .sort( (a, b) => {
        if (sort === 1) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        }
        if (sort === 2) {
            return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
        }
        if (sort === 3) {
            return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
        }
        if (sort === 4) {
            return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
        }
        return 0;
    });



    return (
        <div className="container">
            <div className="conta">
                <div className="">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-4">
                            <form className="d-flex" role="select">
                                <select className="form-select" onChange={(e) => {setSort(Number(e.target.value));}}>
                                    <option value={0} defaultValue> Ordernar por:</option>
                                    <option select={sort === 4} value={4} > Precio de mayor a menor</option>
                                    <option select={sort === 3} value={3} > Precio de menor a mayor </option>
                                    <option select={sort === 1} value={1} > Nombre A - Z</option>
                                    <option select={sort === 2} value={2} > Nombre Z - A</option>
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
                                                <button className="btn btn-dark">
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
                                                    <i className="fa-solid fa-heart fa-2x" />
                                                </button>

                                                <button className="btn addC" onClick={() => addProductToCart(product)}>
                                                    <i className="fa-solid fa-cart-plus fa-2x" />
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
