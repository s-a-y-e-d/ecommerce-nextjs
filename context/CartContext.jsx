"use client"
import { createContext, useContext, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export function CartProvider({children}){
  const [cart, setCart] = useState([]);

  const loadCartData = async () => {
    let response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
    setCart(response.data);
  }

  return(
    <CartContext.Provider value={{cart, loadCartData}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
}