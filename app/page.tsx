import ProductCard from './homepage/product';
import { Product } from '@/app/generated/prisma';
import '@/app/homepage/HomePage.css'
import { getProductsData } from '@/lib/data';

export default async function Home() {
  const products = await getProductsData();

  return (
    <main className="home-page">
      <div className="products-grid">
        {products.map((product: Product) => {
          return (
            <ProductCard product={product} key={product.id} />
          );
        })}
      </div>
    </main>

  );
}
