import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({ product }) =>
{
    const {_id, name, price, description, img } = product;
    return (
           <div className="service pb-3 ">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price:{price}</h5>
      <p className="px-5">{description}</p>
      <Link to={`/dashboard/${_id}`}>
        <button className="btn btn-warning">BUY NOW</button>
      </Link>
    </div>
    );
};

export default SingleProduct;