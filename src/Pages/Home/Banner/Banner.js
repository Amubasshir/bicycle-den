import { Carousel } from 'bootstrap';
import React from 'react';
import banner1 from '../../../Images/Banner/banner1.jpg';
import banner2 from '../../../Images/Banner/banner2.jpg';
const Banner = () => {
    return (
          <>
      <Carousel className="banner-text">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

       
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    );
};

export default Banner;