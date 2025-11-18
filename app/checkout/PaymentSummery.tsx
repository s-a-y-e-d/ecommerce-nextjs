import formateMoney from "../../lib/utiles/money";
import { PaymentSummary } from "@/app/generated/prisma";

type Props = {
  totalQuantity: number,
  optimisticPaymentSummery: PaymentSummary,
  formAction: (payload: FormData) => void;
  isPending: boolean;
}

export default function PaymentSummeryCard({ totalQuantity, optimisticPaymentSummery, formAction, isPending }: Props) {

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

        <form action={formAction}>
          <button className="place-order-button button-primary"
            type="submit"
            disabled={isPending}
          >
            Place your order
          </button>
        </form>

      </div>
    </>

  )
}

