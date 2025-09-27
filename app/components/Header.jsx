import Link from 'next/link';
import './header.css'
import CartLink from './CartLink';
export default function Header() {


  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link href="/" className="header-link">
            <img className="logo"
              src="images/logo-white.png" />
            <img className="mobile-logo"
              src="images/mobile-logo-white.png" />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">

          <Link className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <CartLink />

        </div>
      </div>
    </>
  );
}