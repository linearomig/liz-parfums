import React from "react";
import { productList } from '../data';
import '../styles/component/galeria.scss';
import {formatNumber} from '../plus/formatNumber';
import { Link } from "react-router-dom";


const Products = () => {
    return (

        <div className="container">
        <div className='productList'>

          {productList.map((product) => {

            return (
                <div className="container-items">
                <div className="row">

                <div className="item" key={product.id}>
                    <img src={product.img} alt={product.altProduct}/>

                    <div className="info-product">
                        <p><b>{product.nameProduct}</b> 
                        <br/><span>{product.brand} - {product.gender}</span></p>
                        <p className="price">Precio: ${formatNumber(product.price)}</p>
            
                    <div className="d-flex justify-content-around mb-3">
                    <a className="bt"><button 
                        className="btn btn-light text-white">
                        <Link to={`/perfume/${product.altProduct}`}>                            
                        Ver detalhes</Link>
                    </button></a>

                    <a className="bt">
                        <Link to="/carrito">
                        <i class="fa-solid fa-cart-shopping"></i></Link>
                    </a>

                    </div>
                    </div>
                </div>
                </div>
                </div>
                
                
                

            );
          })}
         </div></div>
    );
  };
  
  export default Products;






