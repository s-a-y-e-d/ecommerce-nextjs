import Link from 'next/link'
import OrderSummery from './OrderSummery';
import { Suspense } from 'react';
import Image from 'next/image';
import { getCartData } from '@/lib/data';
import './styles/checkout-header.css'
import './styles/CheckoutPage.css'
import PaymentSummery from './PaymentSummery';

export const dynamic = 'force-dynamic';

export default async function CheckoutPage() {

  const cart = await getCartData(true, true);

  const totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity
  }, 0);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link href="/">
              <Image
                className="logo"
                src="/images/logo.png"
                alt='Logo'
                width={177.219}
                height={26}
              />
              <Image
                className="mobile-logo"
                src="/images/mobile-logo.png"
                alt='mobile logo'
                width={22.531}
                height={26}
              />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              href="/">{`${totalQuantity} items`}</Link>)
          </div>

          <div className="checkout-header-right-section">
            <Image
              src="/images/icons/checkout-lock-icon.png"
              alt='Checkout lock icon'
              width={36}
              height={32}
            />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">

          <div className="order-summary">
            <Suspense fallback={<div>Loading...</div>}>
              <OrderSummery cart={cart} />
            </Suspense>

          </div>

          <PaymentSummery totalQuantity={totalQuantity} />


        </div>
      </div>
    </>
  )

}