import { getProductsData } from "@/lib/data";
import ProductCard from "./homepage/product";
import "./homepage/HomePage.css";

export default async function Home() {
  const products = await getProductsData();

  return (
    <div className="home-page">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
