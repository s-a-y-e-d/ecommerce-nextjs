"use client"
import { addToCart } from "@/lib/utiles/actions";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import styles from "./InputTaker.module.css";

export default function InputTaker({ product }: { product: { id: string } }) {


  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const selectQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setShowAddedMessage(true);
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 2000); // Message disappears after 2 seconds
  };

  return (
    <>
      <div className={styles.productQuantityContainer}>
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

      <div className={`${styles.addedToCart} ${showAddedMessage ? styles.addedToCartVisible : ''}`}>
        <Image src="/images/icons/checkmark.png"
          height={19}
          width={16.625}
          alt='checkmark' />
        Added
      </div>

      <button className={`${styles.addToCartButton} button-primary`}
        data-testid='add-to-cart-button'
        onClick={handleAddToCart}>
        Add to Cart
      </button>
    </>
  );
}