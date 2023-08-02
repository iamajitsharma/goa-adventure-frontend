import React from "react";

interface FooterTitleProps {
  title: string;
}
const FooterTitle: React.FC<FooterTitleProps> = ({ title }) => {
  return (
    <div className="w-full py-2">
      <h4 className="text-neutral-700 text-base md:text-lg font-semibold">
        {title}
      </h4>
    </div>
  );
};

export default FooterTitle;
