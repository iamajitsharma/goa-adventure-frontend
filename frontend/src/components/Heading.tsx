import React from "react";
interface IHeading {
  heading: String;
}

export default function Heading({ heading }: IHeading) {
  return (
    <div className="text-black font-extrabold text-2xl flex flex-col items-center justify-center mt-10 m-3 font-nunito">
      <h1>{heading}</h1>
      <div className="bg-orange-500 w-1/12 h-0.5 m-3"></div>
    </div>
  );
}
