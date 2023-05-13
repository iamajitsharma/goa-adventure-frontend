import React from "react";
import InclusionAndExclusion from "../HighLights/InclusionAndExclusion";
import OverviewPara from "./OverviewPara";
export default function Overview() {
  const lists = ["ankit", "gupta", "test", "check", "new"];
  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <div className="w-9/12  ">
        <OverviewPara />
      </div>
      <div className="w-3/12  ">
        <InclusionAndExclusion heading="Exclusion" lists={lists} />
      </div>
    </div>
  );
}
