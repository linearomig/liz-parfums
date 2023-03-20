import React, { useState } from "react";
import { productList } from '../data';
import { formatNumber } from '../plus/formatNumber';
import { Link } from "react-router-dom";
import '../styles/component/products.scss';


const Products = () => {
    const [search, setSearch] = useState('');

    return (

        <div className="container">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-2">
                <form className="d-flex" role="search">
                    <input className="form-control" type="search" placeholder="Buscar producto" aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)} />
                </form>
            </div>

            <div className="container-fluid">
                <div className="productList">
                    {productList.filter((product) => {
                        return search.toLowerCase() === ''
                            ? product
                            : product.brand.toLowerCase().includes(search);
                        })

                        .map((product) => (
                            <div className='row'>

                                <div className="item" key={product.id}>
                                    <img src={product.img} alt={product.altProduct} />

                                    <div className="info-product">
                                        <p><b>{product.name}</b>
                                            <br /><span>{product.brand} - {product.gender}</span></p>
                                        <p className="price">${formatNumber(product.price)}</p>

                                        <div className="d-flex justify-content-around mb-3">
                                            <a className="bt"><button
                                                className="btn btn-light text-white">
                                                <Link to={`/perfume/${product.name}`}>
                                                    Ver detalhes</Link>
                                            </button></a>

                                            <a className="bt">

                                                <i class="fa-solid fa-cart-shopping fa-lg"></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))}

                </div>
            </div>
        </div>
    );
};

export default Products;






