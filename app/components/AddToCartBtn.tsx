"use client"
import axios from "axios";
export default function AddToCartBtn({ quantity, product, loadCartData}) {
  const addToCart = async () => {
    await axios.post('/api/cart-items', {
      productId: product.id,
      quantity
    });
    await loadCartData();
  };
  return (
    <button className="add-to-cart-button button-primary"
      data-testid='add-to-cart-button'
      onClick={addToCart}>
      Add to Cart
    </button>
  )
}