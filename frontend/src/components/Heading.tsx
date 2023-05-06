import React from "react";
interface IHeading {
  heading: String;
}

export default function Heading({ heading }: IHeading) {
  return (
    <div
      className="
    text-gray-800
    text-lg
    md:text-2xl
    font-poppins
    text-slate-800
    font-semibold
    flex
    flex-col
    items-center
    justify-center
    py-6"
    >
      <h1>{heading}</h1>
      <div className="bg-orange-500 w-1/6 md:w-1/12 h-0.5 m-3"></div>
    </div>
  );
}
