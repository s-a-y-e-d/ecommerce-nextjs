import formateMoney from "@/lib/utiles/money";
import Image from "next/image";
import { Dispatch, SetStateAction } from 'react';
import { CartItem, PaymentSummary, Product } from "../generated/prisma";
import { deleteCartItem } from "@/lib/utiles/actions";

type CartItemWithProduct = CartItem & {
  product: Product
}

type CartProps = {
  cartItem: CartItemWithProduct,
  optimisticCartItems: CartItemWithProduct[],
  setOptimisticCartItems: Dispatch<SetStateAction<CartItemWithProduct[]>>,
  optimisticPaymentSummery: PaymentSummary,
  setOptimisticPaymentSummery: Dispatch<SetStateAction<PaymentSummary>>,
};

export default function CartItemCard({
  cartItem,
  optimisticCartItems,
  setOptimisticCartItems,
  optimisticPaymentSummery,
  setOptimisticPaymentSummery
}: CartProps) {

  return (
    <div className="cart-item-container">
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
            <form className="inline-action-form"
              action={async () => {

                await deleteCartItem(cartItem);
              }}
            >
              <button
                type="submit"
                className="update-action-btn action-btn action-btn-small button-secondary"

              >
                Update
              </button>
            </form>
            <form className="inline-action-form"
              action={async () => {
                const updatedItems = optimisticCartItems.filter(item => item.id !== cartItem.id);
                setOptimisticCartItems(updatedItems);

                const itemsTotalPrice = updatedItems.reduce((sum: number, item: any) => {
                  return sum + (item.product.priceCents * item.quantity);
                }, 0);

                const shippingPrice = itemsTotalPrice > 0 ? 999 : 0;
                const totalBeforeTax = itemsTotalPrice + shippingPrice;
                const tax = totalBeforeTax * 0.1;

                setOptimisticPaymentSummery({
                  ...optimisticPaymentSummery,
                  itemsTotalPrice,
                  shippingPrice,
                  totalBeforeTax,
                  tax,
                  total: totalBeforeTax + tax,
                });
                await deleteCartItem(cartItem);
              }}
            >
              <button
                type="submit"
                className="delete-action-btn action-btn action-btn-small"
              >
                Delete
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
