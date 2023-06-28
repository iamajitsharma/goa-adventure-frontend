import React from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = () => {
  return (
    <>
      {[0, 1, 2, 3].map((item, index) => (
        <DestinationCard key={index} />
      ))}
    </>
  );
};

export default DestinationList;
