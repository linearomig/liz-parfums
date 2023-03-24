import React from "react";
import { useNavigate } from "react-router-dom";

import { CartItem } from "./CartItem";

import { formatCurrency } from "../plus/formatNumber";
import { useCartContext } from "../context/CartContext";


import "../styles/view/cart.scss";

export const Cart = () => {
  const { cart } = useCartContext();

  const total = formatCurrency(
    cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
  );

  const navigate = useNavigate();

  return (
    <div>


      <div className="container">
        <div className="conta">
          <div className="cart">
            <div className="col-md-12 col-sm-4">
              <br />
              <div className="info__producto">
                {cart.map((product) => {
                  return <CartItem key={product.id} item={product} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="cart">
          <div className="row gutters">
            <div className="col-md-12 col-sm-4">
              <div className="info-product">
                {cart.length > 0 ? (
                  <div className="checkout d-flex">
                    <div className="row">
                      <p>Subtotal: {total}</p>
                      <button className="btn btn-secondary " onClick={() => navigate("/")}>
                        Seguir Comprando{" "}
                      </button>
                      <button className="btn btn-success"
                        onClick={() => {
                          checkout();
                          navigate("/checkout");
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>


                ) : (
                  <div><i className="fa-solid fa-bag-shopping fa-bounce fa-6x p-2" />
                    <h4 className="p-2"> Tu bolsa está vacía </h4>
                    <button className="btn btn-secondary m-3" onClick={() => navigate("/")}>
                      Ver productos{" "}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Cart;
