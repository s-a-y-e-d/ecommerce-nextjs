import prisma from '@/lib/prisma';
import ProductCard from './homepage/product';
import { Product } from '@/app/generated/prisma';
import '@/app/homepage/HomePage.css'
import { unstable_cache } from 'next/cache';

export default async function Home() {
  const getCachedProducts = unstable_cache(async () => {
    return prisma.product.findMany();
  });
  const products = await getCachedProducts();
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
