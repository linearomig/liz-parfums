import React, { useState, useContext } from "react";
import { productList } from '../data';
import { formatNumber } from '../plus/formatNumber';
import { Link } from "react-router-dom";
import '../styles/component/products.scss';



const Products = () => {

    const [favorite, setFavorite] = useState([]);
    const [search, setSearch] = useState('');


    //Add To Favorite:
    const addToFavorite = id => {
        if (!favorite.includes(id)) setFavorite(favorite.concat(id));
        //console.log(id);
    };

    //Remove Favorites:
  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

    //List of Products:
    //let findfavorite = productList.filter(img => favorite.includes(img.id));

    //Filtered Products by Name
    let filtered = productList.filter((product) => {
        if (search === "") {
            return product;
        } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
            return product;
        }

    });



    return (

        <div className="container">
            <div className='conta'>
                <div className="container-fluid">
                    <div className='row'>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-2">
                            <form className="d-flex" role="sort">
                                <input className="form-select" type="sort" />
                            </form>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12 p-2">
                            <form className="d-flex" role="search">
                                <input className="form-control" placeholder="Busca por tu perfume favorito" type="text"
                                    onChange={event => {
                                        setSearch(event.target.value);
                                    }} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="productList">
                   
                    {filtered.map((product) => (

                        <div key={product.id}>

                            <div className='row'>
                                <div className="item">
                                    <img src={product.img} alt={product.altProduct} />

                                    <div className="info-product">
                                        <p><b>{product.name}</b>
                                            <br /><span>{product.brand} - {product.gender}</span></p>
                                        <p className="price">${formatNumber(product.price)}</p>

                                        <div className="d-flex justify-content-around m-5">
                                            <button
                                                className="btn btn-light bt">
                                                <div><Link to={`/perfume/${product.name}`}>
                                                    Ver detalhes</Link></div>
                                            </button>

                                            <button className="corazon" onClick={() => addToFavorite(product.id)}>
                                            <i className="fa-solid fa-heart fa-lg" />
                                            </button>

                                            <button className="addToCartBttn">

                                                <i className="fa-solid fa-cart-plus fa-lg" />
                                            </button>



                                        </div>

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






