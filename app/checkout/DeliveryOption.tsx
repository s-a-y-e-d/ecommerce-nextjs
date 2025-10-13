"use client"
import axios from 'axios';
import dayjs from 'dayjs';
import formateMoney from '../utiles/money';
import loadCartData from '../utiles/cartUtiles';
import type { CartItem, DeliveryOption } from './OrderSummery';

type Props = {
  cartItem: CartItem,
  deliveryOption: DeliveryOption,
  cart: CartItem[]
}

export default function DeliveryOption({ deliveryOption, cartItem, cart }: Props) {


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

    const loadedCartItem: CartItem | undefined = cart.find((loadedCartItem) => {
      return ((loadedCartItem.productId) === (cartItem.productId));
    });

    return loadedCartItem;
  }

  return (
    <div className="delivery-option"
      onClick={selectDeliveryOption}
    >
      <input type="radio"
        checked={deliveryOption.id === selectDeliveryOption()?.deliveryOptionId}
        onChange={() => { console.log(selectDeliveryOption()?.deliveryOptionId) }}
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