import React, { useState } from "react";

interface OverviewsProps {
  description?: string;
  className?: string;
}

const Overviews: React.FC<OverviewsProps> = ({ description, className }) => {
  const [readMore, setReadMore] = useState(false);
  const readMoreHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <div
      className={`text-sm text-textBlack leading-loose transition ease-in-out duration-1000 delay-1000 ${className}`}
    >
      {!readMore ? description?.slice(0, 1500) : description}
      <span
        onClick={readMoreHandler}
        className="text-primary font-semibold flex justify-end cursor-pointer"
      >
        {readMore ? "Read Less" : "Read More"}
      </span>
    </div>
  );
};

export default Overviews;
