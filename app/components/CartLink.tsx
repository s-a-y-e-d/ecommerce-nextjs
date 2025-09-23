"use client"
import Link from "next/link";
import { useCart } from '@/context/CartContext';
import { useEffect } from "react";
import Image from "next/image";

export default function CartLink() {
  const { cart, loadCartData } = useCart();

  let totalQuantity = 0;

  cart.forEach((cartItem: {quantity:number}) => {
    totalQuantity += cartItem.quantity;
  });
  useEffect(() => {
    loadCartData();
  }, []);

  return (
    <Link className="cart-link header-link" href="/checkout">
      <Image className="cart-icon" src="/images/icons/cart-icon.png"
        height={38}
        width={33.766}
        alt="cart" />
      <div className="cart-quantity">{totalQuantity}</div>
      <div className="cart-text">Cart</div>
    </Link>
  );
}