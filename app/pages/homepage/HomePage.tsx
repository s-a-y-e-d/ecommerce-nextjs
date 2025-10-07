import axios from 'axios';
import './HomePage.css'
import Product from './product';
import { ProductType } from './product';

export default async function HomePage() {
    const response = await axios.get('http://localhost:3000/api/products');
    const products = response.data;


  return (
    
    <>
      <title>Ecommerce Project</title>

      <div className="home-page">
        <div className="products-grid">
          {products.map((product: ProductType) => {
            return (
              <Product product={product} key={product.id}/>
            );
          })}

        </div>
      </div>
    </>
  );
}