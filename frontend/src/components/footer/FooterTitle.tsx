import React from "react";

interface FooterTitleProps {
  title: string;
}
const FooterTitle: React.FC<FooterTitleProps> = ({ title }) => {
  return (
    <div className="w-full py-2">
      <h4 className="text-gray-500 text-base font-medium">{title}</h4>
    </div>
  );
};

export default FooterTitle;
