import React, { useContext } from "react";
import { productList } from "../data";
import { formatNumber } from "../plus/formatNumber";
import { ShopContext } from "../context/ShopContext";


export const CartItem = () => {

  const { product } = productList;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    console.log(addToCart)

return (
  <div className="cartItem">
    <img src={product.img} />
    <div className="description">
      <p><b>{product.name}</b></p>
      <p> Price: ${formatNumber(product.price)}</p>

      <div className="countHandler">
        <button onClick={() => removeFromCart(itemId)}> - </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), itemId)}/>
        <button onClick={() => addToCart(itemId)}> + </button>
      </div>
    </div>
  </div>
);
};

export default CartItem; 