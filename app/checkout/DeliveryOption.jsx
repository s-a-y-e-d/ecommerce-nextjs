"use client"
import axios from 'axios';
import dayjs from 'dayjs';
import formateMoney from '../utiles/money';
import loadCartData from '../utiles/loadCartData';


export default function DeliveryOption({ deliveryOption, cartItem, cart }) {
  let priceString = 'FREE Shipping';
  if (deliveryOption.priceCents > 0) {
    priceString = `$${formateMoney(deliveryOption.priceCents)} - Shipping`;
  }

  async function putDeliveryOption() {
    await axios.put(`http://localhost:3000/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId: deliveryOption.id
    });
    await loadCartData(cart);
  }

  function selectDeliveryOption() {

    putDeliveryOption();

    
    const loadedCartItem = cart.find((loadedCartItem) => {
      return ((loadedCartItem.productId) === (cartItem.productId));
    });

    return loadedCartItem;
  }

  return (
    <div className="delivery-option"
      onClick={selectDeliveryOption}
    >
      <input type="radio"
        checked={deliveryOption.id === selectDeliveryOption().deliveryOptionId}
        onChange={() => { console.log(selectDeliveryOption().deliveryOptionId) }}
        className="delivery-option-input"
        name={`delivery-option-${cartItem.productId}`} />
      <div>
        <div className="delivery-option-date">
          {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd,MMMM D')}
        </div>
        <div className="delivery-option-price">
          {priceString}
        </div>
      </div>
    </div>
  )
}