import React from "react";

const FooterTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-lg relative pb-4">
      <h5 className="font-medium text-base text-neutral-700">{title}</h5>
    </div>
  );
};

export default FooterTitle;
