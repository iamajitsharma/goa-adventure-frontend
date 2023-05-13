import React from "react";
import StagnantImage from "./StagnantImage";
import ThingsToDoSlider from "./ThingsToDoSlider";
export default function ImageSection() {
  return (
    <div className="flex flex-row justify-center items-stretch">
      <div className="w-3/12  ">
        <StagnantImage />
      </div>
      <div className="w-6/12  ">
        <ThingsToDoSlider />
      </div>
      <div className="w-3/12  ">
        <StagnantImage />
      </div>
    </div>
  );
}
