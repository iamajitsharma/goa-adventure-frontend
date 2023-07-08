import React from "react";
interface IHeading {
  heading?: String;
  subheading?: String;
  textAlign?: String;
}

export default function Heading({ heading, subheading, textAlign }: IHeading) {
  return (
    <div
      className={`mb-10 ${
        textAlign === "center" ? "text-center" : "text-left"
      }`}
    >
      <span className="font-poppins text-sm md:text-base text-primary uppercase font-semibold tracking-widest">
        {subheading}
      </span>
      <h1 className="text-2xl md:text-3xl font-merri font-black text-variant">
        {heading}
      </h1>
    </div>
  );
}
