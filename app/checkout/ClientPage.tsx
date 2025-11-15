'use client'

import { Suspense, useOptimistic, useState, useEffect } from 'react'
import CartItemCardSkeleton from './CartItemCardSkeleton';
import CartItemCard from './CartItemCard';
import PaymentSummerySkeleton from './PaymentSummerySkeleton';
import PaymentSummeryCard from './PaymentSummery';
import { CartItem, PaymentSummary, Product } from '../generated/prisma';

type CartItemWithProduct = CartItem & {
  product: Product;
};

type CartItems = CartItemWithProduct[];

type Props = {
  cartItems: CartItems,
  paymentSummery: PaymentSummary,
}

export default function ClientPage({ cartItems, paymentSummery }: Props) {

  const [optimisticCartItems, setOptimisticCartItems] = useState(cartItems);

  const [optimisticPaymentSummery, setOptimisticPaymentSummery] = useState(paymentSummery);

  useEffect(() => {
    setOptimisticCartItems(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setOptimisticPaymentSummery(paymentSummery);
  }, [paymentSummery]);

  const totalQuantity = optimisticCartItems.reduce((sum, item) => {
    return sum + item.quantity
  }, 0);

  return (
    <>
      <div className="order-summary">
        {optimisticCartItems.map((cartItem: CartItemWithProduct) => {
          return (
            <Suspense
              key={cartItem.id}
              fallback={<CartItemCardSkeleton />}>

              <CartItemCard cartItem={cartItem} optimisticCartItems={optimisticCartItems} optimisticPaymentSummery={optimisticPaymentSummery} setOptimisticCartItems={setOptimisticCartItems} setOptimisticPaymentSummery={setOptimisticPaymentSummery} />

            </Suspense>
          );
        })}

      </div>
      <Suspense fallback={<PaymentSummerySkeleton />}>
        <PaymentSummeryCard totalQuantity={totalQuantity} optimisticPaymentSummery={optimisticPaymentSummery} />
      </Suspense>

    </>
  )
}
