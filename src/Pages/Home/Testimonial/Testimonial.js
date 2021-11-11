import React, { useEffect, useState } from "react";
import TestimonialCards from "../TestimonialCards/TestimonialCards";
import "./Testimonial.css";

const Testimonial = () => {
 
  const [ClientReview, setClientReview] = useState([]);
  // console.log(ClientReview);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);

  return (
    <div className="review-container text-center">
      <h1>Testimonial</h1>
      <div className="row text-center d-flex justify-content-center align-items-center client-review w-75 m-auto">
        {ClientReview.map((client) => (
          <TestimonialCards client={client} key={client._id}></TestimonialCards>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;