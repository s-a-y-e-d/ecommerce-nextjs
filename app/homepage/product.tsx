import formateMoney from '@/app/utiles/money';
import Image from 'next/image';
import InputTaker from '@/app/components/InputTaker';
import { Product } from '@/app/generated/prisma';


type Productprops = {
  product: Product
}

export default function ProductCard({ product }: Productprops) {

  return (
    <div className="product-container"
      data-testid="product-container"
    >
      <div className="product-image-container">
        <Image className="product-image"
          data-testid="product-image"
          src={`/${product.image}`}
          height={180}
          width={180}
          alt='product-image' />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <Image
          className="product-rating-stars" data-testid="rating-image"
          src={`/images/ratings/rating-${(product.ratingStars) * 10}.png`}
          height={19.78}
          width={100}
          alt='rating-image' />
        <div className="product-rating-count link-primary">
          {product.ratingCount}
        </div>
      </div>

      <div className="product-price">
        {`$${formateMoney(product.priceCents)}`}
      </div>

      <InputTaker product={product} />


    </div>
  );
}