"use client"
import axios from "axios";
import loadCartData from "../utiles/cartUtiles";
export default function DeleteCartItem({ cart, cartItem }) {
  const deleteCartItem = async () => {
    await axios.delete(`http://localhost:3000/api/cart-items/${cartItem.productId}`);
    loadCartData(cart);
  };
  return (
    <span className="delete-quantity-link link-primary"
      onClick={deleteCartItem}
    >
      Delete
    </span>
  )
}