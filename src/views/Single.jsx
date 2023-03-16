import { Link, useParams } from 'react-router-dom';
import { productList } from '../data';
import '../styles/view/single.scss';
import { formatNumber } from '../plus/formatNumber';


const SingleProduct = () => {
  const { altProduct } = useParams();
  const product = productList.find((product) => product.altProduct === altProduct);
  

  return (

    <div className=''>
      <div className='row'>

            <div className="col-sm-6">
              <div className='card border-0'>
                <div className="card-body">
                  <div className='foto__producto text-center'>
                  <img src={product.img}/>
                  </div>
                </div>
              </div>
            </div>
            
          
            <div className="col-sm-6">
            <div className='card border-0'>
            <div className="card-body">
              <div className='info__producto'>
                  <i class="fa-solid fa-left-long"></i><Link to="/perfume"> Volver a Perfumes </Link>
                      <br/><br/><br/>
                  <h4>{product.nameProduct}</h4>
                  <p>{product.brand}</p>

                  <p><i class="fa-solid fa-hand-holding-heart"></i> Regalo {product.gender}</p>

                  <h5>Descripción</h5>
                  <p>{product.description}</p>

                      <br/>
                  <h5>Precio</h5>
                  <p>${formatNumber(product.price)}</p>
              </div>
              
              
              <div className="row">
              <div className="text-right">

                    <a className="bt">
                        <Link to="/carrito"> 
                        <i class="fa-solid fa-cart-plus fa-2xl"></i></Link>
                    </a>

                    <a className="bt ms-3"><button 
                      className="btn btn-light">
                      <Link to="#">                            
                      Guardar para más tarde</Link>
                    </button></a>

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
