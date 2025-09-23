import axios from 'axios';
import './HomePage.css'
import { Product } from './product';

export async function HomePage() {
  //const [products, setProducts] = useState([]);
  

    /*const getProductsData = async () => {
      let response = await axios.get('/api/products');
      setProducts(response.data);
    };
    getProductsData();
    */

    const response = await axios.get('http://localhost:3000/api/products');
    console.log(response.data);
    const products = response.data;


  return (
    
    <>
      <title>Ecommerce Project</title>

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product product={product} key={product.id}/>
            );
          })}

        </div>
      </div>
    </>
  );
}