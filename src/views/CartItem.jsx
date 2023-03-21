import React from "react";
import { productList } from "../data";
import { formatNumber } from "../plus/formatNumber";


export const CartItem = () => {

  const { product } = productList;


  return (
    <div className="cartItem">
      <img src={product.img} />
      <div className="description">
        <p><b>{product.name}</b></p>
        <p> Price: ${formatNumber(product.price)}</p>

        <div className="countHandler">
          <button > - </button>
          <input/>
          <button > + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 