'use client';

import Link from 'next/link';
import './header.css'
import CartLink from './CartLink';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link href="/" className="header-link">
            <Image className="logo"
              src="/images/logo-white.png"
              alt='something'
              height={26}
              width={177.219}
            />
            <Image className="mobile-logo"
              src="/images/mobile-logo-white.png"
              alt='something'
              height={26}
              width={22.531}
            />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <Image className="search-icon" src="/images/icons/search-icon.png"
              alt='something'
              height={20}
              width={17.5} />
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