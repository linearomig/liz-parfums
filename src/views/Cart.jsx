import React from "react";
import { useNavigate } from "react-router-dom";

import { CartItem } from "./CartItem";

import { formatCurrency } from "../plus/formatNumber";
import { useCartContext } from "../context/CartContext";
import Banner from "../components/Banner";
import PrivateNavbar from "../components/PrivateNavbar";

import "../styles/view/cart.scss";

export const Cart = () => {
  const { cart } = useCartContext();

  const total = formatCurrency(
    cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
  );

  const navigate = useNavigate();

  return (
    <div>

      <PrivateNavbar />

      <Banner />

      <div className="container">
        <div className="conta">
          <div className="cart">
          
              <div className="col-lg-8 col-md-12 col-sm-4">
              <h1>Carro</h1>
                <div className="card">
                  <div className="">
                    
                    <br />
                    <div className="info__producto">
                      {cart.map((product) => {
                        return <CartItem key={product.id} item={product} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="cart">
            <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="info-product">
                    {cart.length > 0 ? (
                      <div className="checkout d-flex">
                        <div className="row">
                        <p>Subtotal: {total}</p>
                        
                        <button className="btn btn-secondary " onClick={() => navigate("/productos")}>
                          Seguir Comprando{" "}
                        </button>
                        <button className="btn btn-primary"
                          onClick={() => {
                            // checkout();
                            navigate("/checkout");
                          }}
                        >
                          Checkout
                        </button>
                        </div>
                      </div>
                      
                    ) : (
                      <h1> Tu bolsa está vacía </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Cart;
