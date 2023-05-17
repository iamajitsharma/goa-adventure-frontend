import React from "react";

interface OverviewsProps {
  description?: string;
  className?: string;
}

const Overviews: React.FC<OverviewsProps> = ({ description, className }) => {
  return (
    <div className={`text-sm text-textBlack leading-loose ${className}`}>
      {description}
    </div>
  );
};

export default Overviews;
