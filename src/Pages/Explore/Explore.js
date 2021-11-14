import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Explore = () =>
{
       const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://secret-fjord-13605.herokuapp.com/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    return (
           <div id="services">
      <h2 className="text-primary mt-5"><strong>All Products</strong></h2>
      <div className="service-container ">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
    );
};

export default Explore;