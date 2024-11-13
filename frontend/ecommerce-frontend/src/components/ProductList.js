import React, { useEffect, useState } from 'react';
function ProductList() {
 const [products, setProducts] = useState([]);
 useEffect(() => {
    console.log("I am here");
 fetch('https://e-commerce-backend-iota-three.vercel.app/products')
 .then(response => response.json())
 .then(data => setProducts(data));
 }, []);
 return (
 <div>
 <h2>Product List</h2>
 {products.map(product => (
 <div key={product._id}>
 <h3>{product.name}</h3>
 <p>{product.description}</p>
 <p>Price: ${product.price}</p>
 </div>
 ))}
 </div>
 );
}
export default ProductList;