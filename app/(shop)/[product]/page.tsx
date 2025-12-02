import { getProductBySlug, getProductsData } from "@/lib/data";
import Image from "next/image";
import formateMoney from "@/lib/utiles/money";
import InputTaker from "@/app/components/InputTaker";
import styles from "./product.module.css";
import { Product } from "@/app/generated/prisma";
import RelatedProducts from "@/app/components/RelatedProducts";

export default async function Page({ params }: { params: Promise<{ product: string }> }) {
  const { product: productSlug } = await params;
  const product = await getProductBySlug(productSlug);
  const allProducts = await getProductsData();

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = allProducts
    .filter((p: Product) => p.slug !== product.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div>
      <div className={styles.productDetailsContainer}>
        <div className={styles.productImageContainer}>
          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={500}
            height={500}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productInfoContainer}>
          <h1 className={styles.productName}>{product.name}</h1>
          <div className={styles.productRatingContainer}>
            <Image
              className={styles.productRatingStars}
              src={`/images/ratings/rating-${product.ratingStars * 10}.png`}
              height={19.78}
              width={100}
              alt="rating-image"
            />
            <div className={`${styles.productRatingCount} link-primary`}>
              {product.ratingCount}
            </div>
          </div>
          <div className={styles.productPrice}>{`${formateMoney(
            product.priceCents
          )}`}</div>
          <InputTaker product={product} />
        </div>
      </div>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}