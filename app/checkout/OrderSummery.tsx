import dayjs from 'dayjs';
import Image from "next/image";
import formateMoney from "../utiles/money";
import { Cart, Product } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { DeliveryOption } from '@/app/generated/prisma';
import DeliveryOptionCard from './DeliveryOption';
import DeleteCartItem from '../components/DeleteCartItem';

type CartItemWithProduct = Cart & {
  product: Product
}
type CartProps = {
  cart: CartItemWithProduct[]
};

export default async function OrderSummery({ cart }: CartProps) {


  const deliveryOptions = await prisma.deliveryOption.findMany();

  return (
    cart.map((cartItem) => {
      const selectedDeliveryOption = deliveryOptions
        .find((deliveryOption: DeliveryOption) => {
          return ((deliveryOption.id) === (cartItem.deliveryoptionId));
        });
      return (
        <div key={cartItem.productId} className="cart-item-container">
          <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption?.deliveryDays).format(('dddd,MMMM D'))}
          </div>

          <div className="cart-item-details-grid">
            <Image className="product-image"
              src={`/${cartItem.product.image}`}
              height={180}
              width={180}
              alt='product-image' />

            <div className="cart-item-details">
              <div className="product-name">
                {cartItem.product.name}
              </div>
              <div className="product-price">
                {`$${formateMoney(cartItem.product.priceCents)}`}
              </div>
              <div className="product-quantity">
                <span>
                  Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                </span>
                <span className="update-quantity-link link-primary">
                  Update
                </span>
                <DeleteCartItem cartItem={cartItem} />
              </div>
            </div>

            <div className="delivery-options">
              <div className="delivery-options-title">
                Choose a delivery option:
              </div>
              {deliveryOptions.map((deliveryOption: DeliveryOption) => {
                return (

                  <DeliveryOptionCard key={deliveryOption.id} deliveryOption={deliveryOption} cartItem={cartItem} />


                );
              })}
            </div>
          </div>
        </div>
      )

    })
  )
}