import React, { useEffect, useState } from 'react';
import SingleProduct from '../../SingleProduct/SingleProduct';
import './Products.css';

const Products = () =>
{
     const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://secret-fjord-13605.herokuapp.com/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    return (
         <div id="services">
      <h1 className="text.dark mt-5"><strong>Our Products</strong></h1>
      <div className="service-container ">
        {products.slice(0, 6).map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
    );
};

export default Products;