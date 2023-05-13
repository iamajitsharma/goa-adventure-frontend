import React from "react";
import HighLightsSlider from "./HighLightsSlider";
import Inclusion from "./Inclusion";

export default function PlacePriceSection() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-9/12  ">
        <HighLightsSlider />
      </div>
      <div className="w-3/12  ">
        {" "}
        <Inclusion />
      </div>
    </div>
  );
}
