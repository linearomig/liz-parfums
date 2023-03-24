import React from "react";

import { formatCurrency } from "../plus/formatNumber";
import { useCartContext } from "../context/CartContext";

import "../styles/view/cartItem.scss";

export const CartItem = ({ item }) => {
  const { addProductToCart, removeProductFromCart, updateProductOnCart } =
    useCartContext();

  return (

    <div className="container-fluid">
      <div className="row">
        <div className="productList">
          <div className="foto__producto ">
            <img src={item.img} />
          </div>

          <div className="col">
            <div className="card border-0">
              <div className="card-body">
                <div className="info__producto">
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <p> Price: {formatCurrency(item.price)}</p>
                </div>

                <div className="countHandler">
                  <button className="btn btn-danger" onClick={() => removeProductFromCart(item)}> - </button>
                  <input className="quantidade-btn"
                    value={item.quantity}
                    onChange={(event) => {
                      const quantity = Number(event.target.value);
                      if (quantity >= 0) {
                        updateProductOnCart(item, quantity);
                      }
                    }}
                  />
                  <button className="btn btn-primary" onClick={() => addProductToCart(item)}> + </button>

                </div>
              </div></div></div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
