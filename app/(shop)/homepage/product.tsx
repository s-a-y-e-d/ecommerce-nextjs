import formateMoney from '@/lib/utiles/money';
import Image from 'next/image';
import InputTaker from '@/app/components/InputTaker';
import { Product } from '@/app/generated/prisma';
import Link from 'next/link';
import styles from './product.module.css';


type Productprops = {
  product: Product
}

export default function ProductCard({ product }: Productprops) {

  return (

    <div className={styles.productContainer}
      data-testid="product-container"
    >
      <Link href={`${product.slug}`} className={styles.productLink}>
        <div className={styles.productImageContainer}>
          <Image className={styles.productImage}
            data-testid="product-image"
            src={product.image.startsWith('http') || product.image.startsWith('/') ? product.image : `/${product.image}`}
            height={180}
            width={180}
            alt='product-image' />
        </div>

        <div className={styles.productName}>
          {product.name}
        </div>

        <div className={styles.productRatingContainer}>
          <Image
            className={styles.productRatingStars} data-testid="rating-image"
            src={`/images/ratings/rating-${(product.ratingStars) * 10}.png`}
            height={19.78}
            width={100}
            alt='rating-image' />
          <div className={styles.productRatingCount}>
            {product.ratingCount}
          </div>
        </div>

        <div className={styles.productPrice}>
          {`$${formateMoney(product.priceCents)}`}
        </div>
      </Link>
      <InputTaker product={product} />

    </div>
  );
}