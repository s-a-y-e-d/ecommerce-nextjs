"use client"
import axios from 'axios';
import dayjs from 'dayjs';
//import DeliveryOptionInput from './DeliveryOptionInput';
import formateMoney from '../utiles/money';
import loadCartData from '../utiles/loadCartData';

export default function DeliveryOption({ cartItem, deliveryOption, cart }) {
  //const selectDeliveryOption =

  let priceString = 'FREE Shipping';
  if (deliveryOption.priceCents > 0) {
    priceString = `$${formateMoney(deliveryOption.priceCents)} - Shipping`;
  }


  return (
    <div className="delivery-option"
      onClick={async () => {
        await axios.put(`http://localhost:3000/api/cart-items/${cartItem.productId}`, {
          deliveryOptionId: deliveryOption.id
        });
        await loadCartData(cart);
      }}
    >
      <input type="radio"
      checked={deliveryOption.id === cartItem.deliveryOptionId}
      onChange={() => { }}
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