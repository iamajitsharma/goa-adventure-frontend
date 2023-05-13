import React from "react";
import Place from "./Place";
import Price from "./Price";

export default function PlacePriceSection() {
  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <div className="w-9/12  ">
        <Place />
      </div>
      <div className="w-3/12  ">
        {" "}
        <Price />
      </div>
    </div>
  );
}
