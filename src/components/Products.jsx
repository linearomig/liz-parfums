import React, { useState, useContext } from "react";
import { productList } from '../data';
import { formatNumber } from '../plus/formatNumber';
import { Link } from "react-router-dom";
import '../styles/component/products.scss';
import { ShopContext } from '../context/ShopContext';
import { FavoritosContext } from "../context/favoritosContext";
import { Button } from 'react-bootstrap';


const Products = ({ info, liked }) => {
    const [search, setSearch] = useState('');
    const { favoritos, addFavoritos, removeFavoritos } = useContext(FavoritosContext);
    const { cartItems, addToCart, updateCartItemCount } = useContext(ShopContext);


    return (

        <div className="container">
            <div className='conta'>
                <div className="container-fluid">
                    <div className='row'>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-2">
                            <form className="d-flex" role="search">
                                <input className="form-control" type="search" placeholder="Buscar producto" />
                            </form>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12 p-2">
                            <form className="d-flex" role="search">
                                <input className="form-control" type="search" placeholder="Buscar producto" aria-label="Search"
                                    onChange={(e) => setSearch(e.target.value)} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="productList">
                    <div className='row'>
                        <div className="item">

                            {productList.filter((product) => {
                                return search.toLowerCase() === ''
                                    ? product
                                    : product.brand.toLowerCase().includes(search);
                            })

                                .map((product) => (
                                    <div>
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

                                            {liked
                                                ? <Button onClick={() => { removeFavoritos(info.id) }}>Eliminar</Button>
                                                : <Button disabled={favoritos.some((img) => img.id == info.id)} onClick={() => { addFavoritos(info) }} >Agregar</Button>
                                            }
                                            <button className="addToCartBttn">

                                                <i className="fa-solid fa-cart-plus fa-lg" />
                                            </button>



                                        </div>
                                    </div></div>



                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products






