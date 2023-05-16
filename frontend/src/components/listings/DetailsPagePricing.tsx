import React from "react";
import Button from "../common/Button";

const DetailsPagePricing = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2 justify-center">
        <span className="text-base font-medium line-through text-gray-500/80">
          2500
        </span>
        <span className="text-2xl font-bold text-slate-800/80">Rs1350</span>
        <button className="p-0.5 bg-yellow-300/70">40% off</button>
      </div>
      <Button label="Book Now" onClick={() => {}} />
    </div>
  );
};

export default DetailsPagePricing;
