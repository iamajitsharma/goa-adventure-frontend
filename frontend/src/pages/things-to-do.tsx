import React from "react";
import Image from "next/image";
import ImageSection from "../components/ThingsToDo/ImgSection";
import PriceAndPlaceSection from "../components/ThingsToDo/PriceAndPlaceSection";
import HighLights from "../components/ThingsToDo/HighLights";
import Overview from "../components/ThingsToDo/Overview";
import Options from "../components/ThingsToDo/Options";

import Itinerary from "../components/ThingsToDo/Itinerary";
const ThingsToDo = () => {
  return (
    <div>
      <ImageSection />
      <div className="m-12 flex flex-col">
        <PriceAndPlaceSection />
        <HighLights />
        <Overview />
        <Options />
        <Itinerary />
      </div>
    </div>
  );
};

export default ThingsToDo;
