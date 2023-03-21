import { Link, useParams } from 'react-router-dom';
import { productList } from '../data';
import '../styles/view/singleProduct.scss';
import { formatNumber } from '../plus/formatNumber';
import {  useState } from 'react';


const SingleProduct = () => {
  const { name } = useParams();
  const product = productList.find((product) => product.name === name);

  const [favorite, setFavorite] = useState([]);


  //Add To Favorite:
  const addToFavorite = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    console.log(id);
  };




  return (

    <div className=''>
      <div className='row'>

        <div className="col-sm-6">
          <div className='card border-0'>
            <div className="card-body">
              <div className='foto__producto text-center'>
                <img src={product.img} />
              </div>
            </div>
          </div>
        </div>


        <div className="col-sm-6">
          <div className='card border-0'>
            <div className="card-body">
              <div className='info__producto'>
                <i className="fa-solid fa-left-long"></i><Link to="/perfume"> Volver a Perfumes </Link>
                <br /><br /><br />
                <h4>{product.name}</h4>
                <p>{product.brand}</p>

                <p><i className="fa-solid fa-hand-holding-heart"></i> Regalo {product.gender}</p>

                <h5>Descripción</h5>
                <p>{product.description}</p>

                <br />
                <h5>Precio</h5>
                <p>${formatNumber(product.price)}</p>
              </div>

              <button onClick={() => addToFavorite(product.id)}>
                Favorito </button>

              <div className="row">
                <div className="text-right">

                  <button className="addToCartBttn">
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
