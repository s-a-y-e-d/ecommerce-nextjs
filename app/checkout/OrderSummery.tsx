import axios from "axios";
import dayjs from 'dayjs';
import Image from "next/image";
import DeliveryOption from "./DeliveryOption";
import formateMoney from "../utiles/money";
import { loadCartData } from "../utiles/cartUtiles";
import DeleteCartItem from "../components/DeleteCartItem";
import { Suspense } from "react";
import { Product } from '@/app/generated/prisma';

export type CartItem = {
  productId: string,
  quantity: number,
  deliveryOptionId: string,
  product: Product
};

type CartProps = {
  cart: CartItem[]
};

export type DeliveryOption = {
  id: string,
  priceCents: number,
  estimatedDeliveryTimeMs: number
};


export default async function OrderSummery({ cart }: CartProps) {

  loadCartData(cart);

  const response = await axios.get(
    'http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime'
  );
  const deliveryOptions = response.data;

  return (
    cart.map((cartItem) => {
      const selectedDeliveryOption = deliveryOptions
        .find((deliveryOption: DeliveryOption) => {
          return ((deliveryOption.id) === (cartItem.deliveryOptionId));
        });
      return (
        <div key={cartItem.productId} className="cart-item-container">
          <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(('dddd,MMMM D'))}
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
                <DeleteCartItem cart={cart} cartItem={cartItem} />
              </div>
            </div>

            <div className="delivery-options">
              <div className="delivery-options-title">
                Choose a delivery option:
              </div>
              {deliveryOptions.map((deliveryOption: DeliveryOption) => {
                return (
                  <Suspense key={deliveryOption.id} fallback={<div>Loading...</div>}>
                    <DeliveryOption deliveryOption={deliveryOption} cartItem={cartItem} cart={cart} />
                  </Suspense>

                );
              })}
            </div>
          </div>
        </div>
      )

    })
  )
}