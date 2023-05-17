import React from "react";
import Button from "../common/Button";

interface SinglePriceProps {
  regularPrice: string | number;
  salePrice: string | number;
  discount: string | number;
  onClick: () => void;
}

const DetailsPagePricing: React.FC<SinglePriceProps> = ({
  regularPrice,
  salePrice,
  discount,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2 justify-center">
        <span className="text-base font-medium line-through text-gray-500/80">
          ₹{regularPrice}
        </span>
        <span className="text-2xl font-bold text-slate-800/80">
          ₹{salePrice}
        </span>
        <button className="p-1 bg-variantLight text-variantColor font-medium rounded-md">
          {discount}
        </button>
      </div>
      <Button label="Book Now" onClick={onClick} />
    </div>
  );
};

export default DetailsPagePricing;
