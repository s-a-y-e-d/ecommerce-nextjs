export default function PaymentSummerySkeleton() {
  return (
    <div className="payment-summary payment-summary-skeleton">
      <div className="payment-summary-title skeleton-box skeleton-title"></div>

      <div className="payment-summary-row skeleton-row">
        <div className="skeleton-box skeleton-text"></div>
        <div className="skeleton-box skeleton-money"></div>
      </div>

      <div className="payment-summary-row skeleton-row">
        <div className="skeleton-box skeleton-text"></div>
        <div className="skeleton-box skeleton-money"></div>
      </div>

      <div className="payment-summary-row subtotal-row skeleton-row">
        <div className="skeleton-box skeleton-text"></div>
        <div className="skeleton-box skeleton-money"></div>
      </div>

      <div className="payment-summary-row skeleton-row">
        <div className="skeleton-box skeleton-text"></div>
        <div className="skeleton-box skeleton-money"></div>
      </div>

      <div className="payment-summary-row total-row skeleton-row">
        <div className="skeleton-box skeleton-text"></div>
        <div className="skeleton-box skeleton-money"></div>
      </div>
    </div>
  );
}
