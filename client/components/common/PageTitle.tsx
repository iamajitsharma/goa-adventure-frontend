import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="mt-14">
      <h2 className="text-xl md:text-3xl font-semibold text-black">{title}</h2>
    </div>
  );
};

export default PageTitle;
