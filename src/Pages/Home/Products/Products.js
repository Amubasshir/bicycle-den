import React, { useEffect, useState } from 'react';
import SingleProduct from '../../SingleProduct/SingleProduct';
import './Products.css';

const Products = () =>
{
     const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    return (
         <div id="services">
      <h2 className="text-primary mt-5">Our Products</h2>
      <div className="service-container ">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
    );
};

export default Products;