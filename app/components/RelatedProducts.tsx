import ProductCard from "@/app/(shop)/homepage/product";
import { Product } from "@/app/generated/prisma";
import styles from "./RelatedProducts.module.css";

type RelatedProductsProps = {
  products: Product[];
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className={styles.relatedProductsContainer}>
      <h2 className={styles.relatedProductsTitle}>Related Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product: Product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
