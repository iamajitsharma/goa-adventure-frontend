import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkelton = () => {
  return (
    <div className="max-w-xs h-auto overflow-hidden rounded-3xl shadow-sm m-3">
      <Skeleton className="h-44" />
      <Skeleton className="mt-4" />
      <div className="flex flex-row justify-between my-1">
        <Skeleton width={120} />
        <Skeleton width={60} />
      </div>

      <div className="flex flex-row flex-wrap justify-start gap-2">
        <Skeleton width={150} />
        <Skeleton width={120} />
        <Skeleton width={150} />
      </div>
      <div className="flex flex-row justify-between my-3">
        <Skeleton width={120} />
        <Skeleton width={80} />
      </div>
    </div>
  );
};

export default CardSkelton;
