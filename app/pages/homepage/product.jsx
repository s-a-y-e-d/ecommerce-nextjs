import { formateMoney } from '../../utilities/money';
import Image from 'next/image';
import AddToCartBtn from '@/app/components/AddToCartBtn';
import ProductQuantityContainer from '@/app/components/ProductQuantityContainer';

export function Product({ product }) {

  return (
    <div className="product-container"
      data-testid="product-container"
    >
      <div className="product-image-container">
        <Image className="product-image"
          data-testid = "product-image"
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
          src={`/images/ratings/rating-${(product.rating.stars) * 10}.png`}
          height={19.78}
          width={100}
          alt='rating-image' />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">
        {`$${formateMoney(product.priceCents)}`}
      </div>

      <ProductQuantityContainer product={product}/>

      
    </div>
  );
}