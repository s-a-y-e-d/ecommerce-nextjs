"use client"
/*
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const loadCartData = async () => {
    let response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
    setCart(response.data);
    setLoaded(true);
  }

  useEffect(() => {
    loadCartData();
  }, []);

  if (!loaded) {
    return null; // or a loading spinner if you prefer
  }

  return (
    <CartContext.Provider value={{ cart, loadCartData }}>
      {children}
    </CartContext.Provider>
  )
}

export default function useCart() {
  return useContext(CartContext);
}
  */
