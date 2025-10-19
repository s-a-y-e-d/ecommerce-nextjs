"use client"
import dayjs from 'dayjs';
import formateMoney from '../utiles/money';
import { DeliveryOption } from '../generated/prisma';
import { Cart } from "@/app/generated/prisma";
import { selectDeliveryOption } from '../utiles/actions';
type Props = {
  cartItem: Cart,
  deliveryOption: DeliveryOption,
}

export default function DeliveryOptionCard({ deliveryOption, cartItem }: Props) {


  let priceString = 'FREE Shipping';
  if (deliveryOption.priceCents > 0) {
    priceString = `$${formateMoney(deliveryOption.priceCents)} - Shipping`;
  }


  return (
    <div className="delivery-option"
      onClick={() => { selectDeliveryOption(cartItem, deliveryOption.id) }}
    >
      <input type="radio"
        checked={deliveryOption.id === cartItem.deliveryoptionId}
        onChange={() => { }}
        className="delivery-option-input"
        name={`delivery-option-${cartItem.productId}`} />
      <div>
        <div className="delivery-option-date">
          {dayjs(deliveryOption.deliveryDays).format('dddd,MMMM D')}
        </div>
        <div className="delivery-option-price">
          {priceString}
        </div>
      </div>
    </div>
  )
}