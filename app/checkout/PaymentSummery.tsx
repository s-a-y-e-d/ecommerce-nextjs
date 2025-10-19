import Link from 'next/link';
import formateMoney from "../utiles/money";
import { PaymentSummery } from "@/app/generated/prisma";
import { getPaymentSummeryData } from '@/lib/data';


export default async function PaymentSummeryCard({ totalQuantity }: { totalQuantity: number }) {

  const paymentSummery: PaymentSummery = await getPaymentSummeryData();

  const totalBeforeTax: number = paymentSummery.itemsTotalPrice + paymentSummery.shippingPrice;
  const tax: number = totalBeforeTax * 0.1;
  return (
    <>
      <div className="payment-summary">
        <div className="payment-summary-title">
          Payment Summary
        </div>

        <div className="payment-summary-row">
          <div>Items ({totalQuantity}):</div>
          <div className="payment-summary-money">${formateMoney(paymentSummery.itemsTotalPrice)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div className="payment-summary-money">${formateMoney(paymentSummery.shippingPrice)}</div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div className="payment-summary-money">${formateMoney(totalBeforeTax)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div className="payment-summary-money">${formateMoney(tax)}</div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Order total:</div>
          <div className="payment-summary-money">${formateMoney(totalBeforeTax + tax)}</div>
        </div>

        <Link href="/orders">
          {/*<PlaceOrderBtn cart={cart} />*/}
        </Link>

      </div>
    </>

  )
}