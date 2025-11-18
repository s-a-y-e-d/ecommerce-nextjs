export default function CartItemCardSkeleton() {
  return (
    <div className="cart-item-container cart-item-skeleton">
      <div className="cart-item-details-grid">
        <div className="product-image skeleton-box skeleton-image"></div>

        <div className="cart-item-details">
          <div className="product-name skeleton-box skeleton-product-name"></div>
          <div className="product-price skeleton-box skeleton-product-price"></div>
          <div className="product-quantity">
            <div className="skeleton-box skeleton-quantity"></div>
            <div className="skeleton-box skeleton-link" style={{ marginTop: '8px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
