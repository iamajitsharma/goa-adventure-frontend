"use client";
//import node module libraries
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";

//import custom components
import Box from "components/UI/Box";

interface OverviewProps {
  overview?: TypedObject | TypedObject[];
  title?: string;
}

const ProductOverview: React.FC<OverviewProps> = ({ overview, title }) => {
  const [isCollaped, setisCollapsed] = useState(true);

  return (
    <Box className="bg-white my-4 relative">
      <div className="py-2">
        <h4 className="text-sm md:text-xl font-medium border-l-2 border-orange-500 px-2 py-0">
          Oveview: {title}
        </h4>
      </div>
      <div
        className={`text-sm text-left md:text-justify leading-relaxed ${
          isCollaped ? "line-clamp-6" : ""
        }`}
      >
        {overview && <PortableText value={overview} />}
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => setisCollapsed((prev) => !prev)}
          className="text-sm bg-orange-500 py-1 px-2 text-white rounded-md mt-4"
        >
          {isCollaped ? "Read More" : "Read Less"}
        </button>
      </div>
    </Box>
  );
};

export default ProductOverview;
