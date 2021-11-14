import React from "react";
import { useForm } from "react-hook-form";
import "./Review.css";

const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm();
    
  const onSubmit = (data) => {
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
          alert('added successfully');
                    reset();
      });
  };
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="apply-form-input"
          name="name"
          placeholder="Name"
                  {...register("name")}
                
        />
        <br />
        <input
          className="apply-form-input"
          type="email"
          name="email"
          placeholder="Email"
                  {...register("email")}
                  
        />
        <br />
        <input
          className="apply-form-input"
          id="text-box"
          {...register("comments")}
          placeholder="Write your comments here"
        />
        <br />
        <input
          className="apply-form-input"
          name="rating"
          placeholder="give us Rating"
          {...register("rating", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
              <input  className="btn btn-info w-30"type="submit" value="Submit" />
              
      </form>
    </div>
  );
};

export default Review;