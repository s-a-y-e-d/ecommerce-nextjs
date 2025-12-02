import CartItemCardSkeleton from '../../components/ui/CartItemCardSkeleton';
import PaymentSummerySkeleton from '../../components/ui/PaymentSummerySkeleton';
import { Suspense } from 'react';
import '@/app/(shop)/checkout/styles/CheckoutPage.css';

export default function CheckoutLoading() {
  return (
    <>
      <title>Checkout - Loading</title>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {[1, 2, 3].map((i) => (
              <Suspense key={i} fallback={<CartItemCardSkeleton />}>
                <CartItemCardSkeleton />
              </Suspense>
            ))}
          </div>

          <Suspense fallback={<PaymentSummerySkeleton />}>
            <PaymentSummerySkeleton />
          </Suspense>
        </div>
      </div>
    </>
  );
}
