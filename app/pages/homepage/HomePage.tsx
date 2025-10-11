import './HomePage.css'
import Product from './product';
import { ProductType } from './product';
import prisma from '@/lib/prisma';

export default async function HomePage() {
  const products = await prisma.product.findMany();

  return (

    <>
      <title>Ecommerce Project</title>

      <div className="home-page">
        <div className="products-grid">
          {products.map((product: ProductType) => {
            return (
              <Product product={product} key={product.id} />
            );
          })}

        </div>
      </div>
    </>
  );
}