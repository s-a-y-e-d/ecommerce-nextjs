import axios from 'axios';
import Link from 'next/link'
import PaymentSummery from './PaymentSummery'
import OrderSummery from '../components/OrderSummery';
import './styles/checkout-header.css'
import './styles/CheckoutPage.css'

export default async function CheckoutPage() {

  const cartResponse = await axios.get(
    'http://localhost:3000/api/cart-items?expand=product'
  );
  let cart = cartResponse.data;


  const paymentSummeryResponse = await axios.get(
    'http://localhost:3000/api/payment-summary'
  );
  const paymentSummery = paymentSummeryResponse.data;

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              href="/">3 items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">

          <div className="order-summary">
            <OrderSummery cart={cart} />
          </div>

          {paymentSummery && (
            <PaymentSummery cart={cart} paymentSummery={paymentSummery} />
          )}

        </div>
      </div>
    </>
  )

}