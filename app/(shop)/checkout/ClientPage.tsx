'use client'

import { Suspense, useState, useEffect, useRef } from 'react'
import CartItemCardSkeleton from '../../components/ui/CartItemCardSkeleton';
import CartItemCard from './CartItemCard';
import PaymentSummerySkeleton from '../../components/ui/PaymentSummerySkeleton';
import PaymentSummeryCard from './PaymentSummery';
import { CartItem, PaymentSummary, Product } from '../../generated/prisma';
import { useActionState } from 'react';
import { addToOrders } from '@/lib/utiles/actions';
import Spinner from '../../components/ui/Spinner';
import toast from 'react-hot-toast';

type CartItemWithProduct = CartItem & {
  product: Product;
};

type CartItems = CartItemWithProduct[];

type Props = {
  cartItems: CartItems,
  paymentSummery: PaymentSummary,
}

type OrderState = {
  status: 'idle';
} | {
  status: 'error';
  error: string;
} | {
  status: 'success';
}

export default function ClientPage({ cartItems, paymentSummery }: Props) {

  const [optimisticCartItems, setOptimisticCartItems] = useState(cartItems);
  const [optimisticPaymentSummery, setOptimisticPaymentSummery] = useState(paymentSummery);

  const [state, formAction, isPending] = useActionState(addToOrders, null);

  const lastSubmissionId = useRef<string | null>(null);

  useEffect(() => {
    if (!state?.submissionId) return;

    if (state?.submissionId === lastSubmissionId.current) return;

    lastSubmissionId.current = state.submissionId;

    if (state.error) {
      toast.error(state.error || "Failed to add to order");
    }
  }, [state]);

  useEffect(() => {
    setOptimisticCartItems(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setOptimisticPaymentSummery(paymentSummery);
  }, [cartItems]);

  const totalQuantity = optimisticCartItems.reduce((sum, item) => {
    return sum + item.quantity
  }, 0);

  return (
    <>
      {isPending && <Spinner message="Creating your order..." />}
      <div className="order-summary">
        {optimisticCartItems.map((cartItem: CartItemWithProduct) => {
          return (
            <Suspense
              key={cartItem.id}
              fallback={<CartItemCardSkeleton />}>

              <CartItemCard
                cartItem={cartItem}
                optimisticCartItems={optimisticCartItems}
                optimisticPaymentSummery={optimisticPaymentSummery}
                setOptimisticCartItems={setOptimisticCartItems}
                setOptimisticPaymentSummery={setOptimisticPaymentSummery}
              />

            </Suspense>
          );
        })}

      </div>
      <Suspense fallback={<PaymentSummerySkeleton />}>
        <PaymentSummeryCard totalQuantity={totalQuantity} optimisticPaymentSummery={optimisticPaymentSummery} formAction={formAction} isPending={isPending} />
      </Suspense>

    </>
  )
}
