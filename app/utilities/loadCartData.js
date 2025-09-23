export async function loadCartData (){
    let response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
    setCart(response.data);
  }