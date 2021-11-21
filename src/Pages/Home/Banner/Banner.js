import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.jpg';
import banner2 from '../../../Images/Banner/banner2.jpg';
const Banner = () => {
    return (
          <>
      <Carousel className="banner-text">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
                    <Carousel.Caption>
                        
                        <h1 className="text-secondary">
              <strong>BE ACTIVE, BE STRONG...</strong>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>

       
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption><h1 className="text-secondary">
              <strong>RIDE BICYCLE, BE FIT. </strong>
            </h1></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    );
};

export default Banner;