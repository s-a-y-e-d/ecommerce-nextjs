"use client"
import axios from "axios"
import loadCartData from "../utiles/loadCartData"
export default function PlaceOrderBtn({cart}) {
  const addToOrders = async () => {
    await axios.post('http://localhost:3000/api/orders');
    await loadCartData(cart);
  }
  return (
    <button className="place-order-button button-primary"
      onClick={addToOrders}
    >
      Place your order
    </button>
  )

}