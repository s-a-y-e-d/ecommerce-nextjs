import Link from "next/link";
import Image from "next/image";
import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

export default async function CartLink() {

  const getCachedCart = unstable_cache(
    async () => { return prisma.cart.findMany() }, ['cartId'], { tags: ['cart'] }
  );
  const cart = await getCachedCart();
  const totalQuantity = cart.reduce((quantity, cartItem) => {
    return quantity + cartItem.quantity;
  }, 0);
  return (
    <Link className="cart-link header-link" href="/checkout">
      <Image className="cart-icon" src="/images/icons/cart-icon.png"
        height={38}
        width={33.766}
        alt="cart" />
      <div className="cart-quantity">{totalQuantity}</div>
      <div className="cart-text">Cart</div>
    </Link>
  );
}