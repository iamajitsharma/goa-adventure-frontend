import React from "react";
import ItineraryButton from "./ItineraryButton";
import ItineraryText from "./ItineraryText";

export default function Itinerary() {
  const data = [
    {
      time: "7:00 AM",
      text: "Pick up from Hotel",
    },
    {
      time: "7:00 AM",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda voluptatibus dignissimos iusto aut quia laudantium ea neque eum asperiores ab, mollitia rem ipsa culpa est magni repudiandae impedit? Temporibus.",
    },
    {
      time: "7:00 AM",
      text: "Pick up from Hotel",
    },
    {
      time: "7:00 AM",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda voluptatibus dignissimos iusto aut quia laudantium ea neque eum asperiores ab, mollitia rem ipsa culpa est magni repudiandae impedit? Temporibus.",
    },
  ];
  return (
    <div className="flex flex-row justify-center items-center my-12 ml-20">
      <div className="w-9/12  ">
        <div className="text-xl my-4">Itinerary</div>
        <div className="flex flex-col">
          {data.map((d) => (
            <div className="flex flex-row items-center justify-start my-4 ">
              <ItineraryButton time={d.time} />
              <ItineraryText text={d.text} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/12  "></div>
    </div>
  );
}
