import Link from 'next/link';
import formateMoney from "../utiles/money";
import loadCartData from "../utiles/loadCartData";
import PlaceOrderBtn from '../components/PlaceOrderbtn';

export default async function PaymentSummery({ cart, paymentSummery }) {

  loadCartData(cart);

  

  return (
    <>
      <div className="payment-summary">
        <div className="payment-summary-title">
          Payment Summary
        </div>

        <div className="payment-summary-row">
          <div>Items ({paymentSummery.totalItems}):</div>
          <div className="payment-summary-money">${formateMoney(paymentSummery.productCostCents)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div className="payment-summary-money">${formateMoney(paymentSummery.shippingCostCents)}</div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div className="payment-summary-money">${formateMoney(paymentSummery.totalCostBeforeTaxCents)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div className="payment-summary-money">${formateMoney(paymentSummery.taxCents)}</div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Order total:</div>
          <div className="payment-summary-money">${formateMoney(paymentSummery.totalCostCents)}</div>
        </div>

        <Link href="/orders">
          <PlaceOrderBtn cart={cart} />
        </Link>

      </div>
    </>

  )
}