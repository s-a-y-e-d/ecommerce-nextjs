import Link from "next/link";
import Image from "next/image";

export default async function CartLink() {

  return (
    <Link className="cart-link header-link" href="/checkout">
      <Image className="cart-icon" src="/images/icons/cart-icon.png"
        height={38}
        width={33.766}
        alt="cart" />
      <div className="cart-text">Cart</div>
    </Link>
  );
}