import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const index = () => {
  return (
    <div className="relative flex items-center">
      <div className="object-cover w-full h-1/2">
        <img
          src="/assets/singapore.jpg"
          alt="Goa Adventure"
          className="w-full"
        />
      </div>
      <div className="absolute w-full">
        <h2 className="text-xl text-center md:text-4xl font-semibold md:font-bold text-white">
          Things to do in Goa
        </h2>
      </div>
    </div>
  );
};

export default index;
