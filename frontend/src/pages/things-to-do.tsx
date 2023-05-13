import React from "react";
import Image from "next/image";
import ImageSection from "../components/ThingsToDo/ImgSection";
import PriceAndPlaceSection from "../components/ThingsToDo/PriceAndPlaceSection";
import HighLights from "../components/ThingsToDo/HighLights";

const ThingsToDo = () => {
  return (
    <div>
      <ImageSection />
      <div className="m-12 flex flex-col">
        <PriceAndPlaceSection />
        <HighLights />
      </div>
    </div>
  );
};

export default ThingsToDo;
