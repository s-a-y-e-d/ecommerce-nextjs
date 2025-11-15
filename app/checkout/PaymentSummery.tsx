import Link from 'next/link';
import formateMoney from "../../lib/utiles/money";
import { PaymentSummary } from "@/app/generated/prisma";

type Props = {
  totalQuantity: number,
  optimisticPaymentSummery: PaymentSummary,
}

export default function PaymentSummeryCard({ totalQuantity, optimisticPaymentSummery }: Props) {


  const totalBeforeTax: number = optimisticPaymentSummery.itemsTotalPrice + optimisticPaymentSummery.shippingPrice;
  const tax: number = totalBeforeTax * 0.1;
  return (
    <>
      <div className="payment-summary">
        <div className="payment-summary-title">
          Payment Summary
        </div>

        <div className="payment-summary-row">
          <div>Items ({totalQuantity}):</div>
          <div className="payment-summary-money">${formateMoney(optimisticPaymentSummery.itemsTotalPrice)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div className="payment-summary-money">${optimisticPaymentSummery.itemsTotalPrice && formateMoney(optimisticPaymentSummery.shippingPrice)}</div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div className="payment-summary-money">${optimisticPaymentSummery.itemsTotalPrice ? formateMoney(totalBeforeTax) : formateMoney(0)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div className="payment-summary-money">${optimisticPaymentSummery.itemsTotalPrice ? formateMoney(tax) : formateMoney(0)}</div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Order total:</div>
          <div className="payment-summary-money">{optimisticPaymentSummery.itemsTotalPrice ? `${formateMoney(totalBeforeTax + tax)}` : "Ayo Pls order smthing I'm goribz"}</div>
        </div>

        <Link href="/orders">
          <button className="place-order-button button-primary"
          //onClick={addToOrders}
          >
            Place your order
          </button>
        </Link>

      </div>
    </>

  )
}

