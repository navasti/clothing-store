import React, {useEffect, useState} from 'react';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/products")
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
    .catch(err=>Error(err))
  },[])

  return (
    <div className="App">
      <h1>first product</h1>
      {products.length > 1 ? 
        <div className="product">
        <img src={products[0].image} alt="maddame"/>
        <p>{products[0].description}</p>
        <p>{products[0].size}</p>
        <p>{products[0].price}</p>
        <p>available sizes: {products[0].sizes[0]}</p>
        </div>
      : 'loading'}
    </div>
  );
}

export default App;
