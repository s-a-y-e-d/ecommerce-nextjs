import { Header } from '../../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css'
import { Product } from './product';

export function HomePage({ cart, loadCartData }) {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {

    const getProductsData = async () => {
      let response = await axios.get('/api/products');
      setProducts(response.data);
    };
    getProductsData();
  }, []);

  return (
    
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product product={product} loadCartData={loadCartData} key={product.id}/>
            );
          })}

        </div>
      </div>
    </>
  );
}