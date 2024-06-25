import Box from "components/UI/Box";
import { LuClock } from "react-icons/lu";
import { HiOutlineMapPin } from "react-icons/hi2";

import React from "react";

interface ProductTitleProps {
  title: string;
  state: string;
  duration: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({
  title,
  state,
  duration,
}) => {
  return (
    <Box className={"border-b shadow-none rounded-none"}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center gap-3 pt-4">
        <span className="inline-flex items-center gap-1">
          <HiOutlineMapPin size={16} />
          {state} Goa
        </span>
        <span className="inline-flex items-center gap-1">
          <LuClock size={16} />
          {duration}
        </span>
      </div>
    </Box>
  );
};

export default ProductTitle;
