import React from "react";
export default function Price() {
  return (
    <div className="flex flex-col justify-start items-center mx-4  px-4 py-5 shadow-lg shadow-gray-400">
      <div className="flex flex-row text-4xl items-center">
        <span className="mr-4">$ 1350</span>
        <span className="text-orange-600 text-sm bg-orange-100 rounded-md px-2 py-2 ">
          40% Off
        </span>
      </div>
      <div className="flex justify-start">
        <span className="text-orange-600 relative right-10 translate-x-1">
          per pax
        </span>
      </div>
      <div className="my-2">
        <button className="rounded-md bg-orange-600 text-white px-16 py-2">
          Book Now
        </button>
      </div>
    </div>
  );
}
