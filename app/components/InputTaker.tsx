"use client"
import loadCartData from "@/app/utiles/loadCartData";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
//type Props = {
//  quantity: number;
//};

export default function InputTaker({ product }: { product: { id: string } }) {



  const addToCart = async () => {
    await axios.post('http://localhost:3000/api/cart-items', {
      productId: product.id,
      quantity
    });
    await loadCartData();
  };

  const [quantity, setQuantity] = useState(1);

  const selectQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <>
      <div className="product-quantity-container">
        <select value={quantity}
          onChange={selectQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <Image src="/images/icons/checkmark.png"
          height={19}
          width={16.625}
          alt='checkmark' />
        Added
      </div>

      <button className="add-to-cart-button button-primary"
        data-testid='add-to-cart-button'
        onClick={addToCart}>
        Add to Cart
      </button>
    </>
  )
}