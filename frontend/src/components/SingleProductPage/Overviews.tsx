import React, { useState } from "react";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
import parse from "html-react-parser";
import ReadMoreReact from "read-more-react";

interface OverviewsProps {
  description?: string;
  className?: string;
}

const Overviews: React.FC<OverviewsProps> = ({ description, className }) => {
  const [readMore, setReadMore] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: deviceSize.mobile });

  const parsedContent = parse(`${description}`);
  console.log(parsedContent);
  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div
      className={`bg-transparent text-sm text-textBlack leading-loose transition ease-in-out duration-1000 delay-1000 ${className}`}
    >
      {parsedContent}
      {/* <span
        onClick={readMoreHandler}
        className="text-primary font-semibold flex justify-end cursor-pointer"
      >
        {readMore ? "Read Less" : "Read More"}
      </span> */}
    </div>
  );
};

export default Overviews;
