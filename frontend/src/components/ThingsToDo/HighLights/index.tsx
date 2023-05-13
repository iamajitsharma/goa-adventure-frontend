import React from "react";
import HighLightsSlider from "./HighLightsSlider";
import Inclusion from "./InclusionAndExclusion";
import InclusionAndExclusion from "./InclusionAndExclusion";

export default function PlacePriceSection() {
  const lists = ["ankit", "gupta", "test", "check", "new"];
  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <div className="w-9/12  ">
        <HighLightsSlider />
      </div>
      <div className="w-3/12  ">
        <InclusionAndExclusion heading="Inclusion" lists={lists} />
      </div>
    </div>
  );
}
