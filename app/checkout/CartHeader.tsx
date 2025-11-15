import Link from 'next/link'
import Image from 'next/image';
import styles from './CartHeader.module.css';

type CartHeaderProps = {
  totalQuantity: number;
}

export default function CartHeader({ totalQuantity }: CartHeaderProps) {
  return (
    <div className={styles.checkoutHeader}>
      <div className={styles.headerContent}>
        <div className={styles.checkoutHeaderLeftSection}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/images/logo.png"
              alt='Logo'
              width={177.219}
              height={26}
            />
            <Image
              className={styles.mobileLogo}
              src="/images/mobile-logo.png"
              alt='mobile logo'
              width={22.531}
              height={26}
            />
          </Link>
        </div>

        <div className={styles.checkoutHeaderMiddleSection}>
          Checkout (<Link className={styles.returnToHomeLink}
            href="/">{`${totalQuantity} items`}</Link>)
        </div>

        <div className={styles.checkoutHeaderRightSection}>
          <Image
            src="/images/icons/checkout-lock-icon.png"
            alt='Checkout lock icon'
            width={36}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}