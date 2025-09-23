"use client"
import axios from 'axios';
import { useState } from 'react'
import { formateMoney } from '../../utilities/money';
import { useCart } from '@/context/CartContext';
import loadCartData from '@/app/utilities/loadCartData';
import Image from 'next/image';

export function Product({ product }) {

  const {loadCartData} = useCart();


  const [quantity, setQuantity] = useState(1);

  const selectQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };
  console.log(product.id);
  console.log(quantity)
  const addToCart = async () => {
    await axios.post('http://localhost:3000/api/cart-items', {
      productId: product.id,
      quantity
    });
    await loadCartData();
  };
  
  

  return (
    <div className="product-container"
      data-testid="product-container"
    >
      <div className="product-image-container">
        <Image className="product-image"
          data-testid = "product-image"
          src={`/${product.image}`}
          height={180}
          width={180}
          alt='product-image' />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <Image className="product-rating-stars" data-testid="rating-image"
          src={`/images/ratings/rating-${(product.rating.stars) * 10}.png`}
          height={19.78}
          width={100}
          alt='rating-image' />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        {`$${formateMoney(product.priceCents)}`}
      </div>

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
          alt='checkmark'/>
        Added
      </div>

      <button className="add-to-cart-button button-primary" 
        data-testid='add-to-cart-button'
        onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  )
}