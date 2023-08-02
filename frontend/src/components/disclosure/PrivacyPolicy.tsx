import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { privacyPolicyData } from "./disclosureData";
import Template from "./Template";
const PrivacyPolicies = () => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        
          {privacyPolicyData.map((item, index) => (
            <Template
              title={item.title}
              description={item.details}
              key={index}
            />
          ))}
       
      </div>
    </div>
  );
};

export default PrivacyPolicies;
