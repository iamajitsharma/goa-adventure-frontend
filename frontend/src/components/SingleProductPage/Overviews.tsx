import React, { useState } from "react";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";

interface OverviewsProps {
  description?: string;
  className?: string;
}

const Overviews: React.FC<OverviewsProps> = ({ description, className }) => {
  const [readMore, setReadMore] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: deviceSize.mobile });

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <div
      className={`text-sm text-justify text-textBlack leading-loose transition ease-in-out duration-1000 delay-1000 ${className}`}
    >
      {isTablet
        ? !readMore
          ? description?.slice(0, 400)
          : description
        : !readMore
        ? description?.slice(0, 1500)
        : description}

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
