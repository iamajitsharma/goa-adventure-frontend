import React from "react";
import dynamic from "next/dynamic";
const Activity = dynamic(() => import("./Activity"), {
  ssr: false,
});
const TourCard = dynamic(() => import("./TourCard"), {
  ssr: false,
});
const Heading = dynamic(() => import("./Heading"), {
  ssr: false,
});

export default function ThrillingActivity() {
  return (
    <>
      <Heading heading={"Popular Thrilling Activities"} />
      <div className="flex flex-row m-20 items-between justify-center">
        <div className="grid grid-cols-4 gap-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div>
              <Activity />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
