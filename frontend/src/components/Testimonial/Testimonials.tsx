import React from "react";
import Heading from "../common/Heading";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  return (
    <div className="">
      <Heading
        heading="What Our Client Says About Us"
        subheading="Testimonial"
        textAlign={"center"}
      />
      <div className="grid grid-cols-4 gap-5 items-center justify-items-center">
        {[0, 1, 2, 3].map((item, index) => (
          <ReviewCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
