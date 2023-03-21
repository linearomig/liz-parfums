import { Link, useParams } from 'react-router-dom';
import { productList } from '../data';
import '../styles/view/singleProduct.scss';
import { formatNumber } from '../plus/formatNumber';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import { FavoritosContext } from '../context/favoritosContext';



const SingleProduct = () => {
  const { name } = useParams();
  const product = productList.find((product) => product.name === name);

  const { addToCart } = useContext(ShopContext);
  const { favoritos, addFavoritos, removeFavoritos } = useContext(FavoritosContext);


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


              <div className="row">
                <div className="text-right">

                  <button className="addToCartBttn" onClick={() => { addToCart(itemId) }}>
                    <i className="fa-solid fa-cart-plus fa-2xl"></i>
                  </button>


                  {liked
                    ? <Button onClick={() => { removeFavoritos(info.id) }}>Eliminar</Button>
                    : <Button disabled={favoritos.some((image) => image.id == info.id)} onClick={() => { addFavoritos(info) }} >Agregar</Button>
                  }


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
