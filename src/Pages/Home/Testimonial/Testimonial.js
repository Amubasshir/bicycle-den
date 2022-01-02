import React, { useEffect, useState } from "react";
import TestimonialCards from "../TestimonialCards/TestimonialCards";
import "./Testimonial.css";

const Testimonial = () => {
 

  const [ClientReview, setClientReview] = useState([]);
  

  useEffect(() => {
    fetch("https://secret-fjord-13605.herokuapp.com/ClientReview")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);

  return (
    <div className="review-container text-center">
      <h1><strong>Testimonial</strong></h1>
      <div className="row text-center d-flex justify-content-center align-items-center client-review w-75 m-auto">
        {ClientReview.map((client) => (
          <TestimonialCards client={client} key={client._id}></TestimonialCards>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;