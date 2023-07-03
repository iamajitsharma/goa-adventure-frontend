import React from "react";
import Button from "../common/Button";
import Link from "next/link";

interface PricingProps {
  price: string | number;
  salePrice: string | number;
  discount: string | number;
}

const Pricing: React.FC<PricingProps> = ({ price, salePrice, discount }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center gap-2 justify-center">
        <span className="text-sm font-medium line-through text-gray-500/80">
          ₹{price}
        </span>
        <span className="text-3xl font-bold text-variant">₹{salePrice}</span>
        <button className="p-2 bg-variantLight text-variantColor font-medium rounded-md">
          {discount} off
        </button>
      </div>
      <div className="">
        <p className="text-lg text-primary">Per Person</p>
      </div>
      <Link href={"/checkout"}>
        <Button label="Book Now" />
      </Link>
    </div>
  );
};

export default Pricing;
