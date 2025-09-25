import axios from "axios";
export default async function loadCartData(cart) {
  const cartResponse = await axios.get(
    'http://localhost:3000/api/cart-items?expand=product'
  );
  cart = cartResponse.data;
}