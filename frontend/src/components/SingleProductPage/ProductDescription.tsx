import React, { useState } from "react";
import PortableText from "react-portable-text";

interface ProductDescriptionProps {
  content: any;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ content }) => {
  const [isCollapse, setIsCollpase] = useState(true);

  const handleTextExpand = () => {
    setIsCollpase((prev) => !prev);
  };
  return (
    <div
      className={`
      font-roboto
      bg-transparent 
      text-sm 
      text-justify 
      text-textBlack 
      leading-loose 
      transition 
      ease-in-out 
      duration-1000 
      delay-1000 
      py-3 
      overflow-hidden`}
    >
      {content && <PortableText content={content} />}
      <span
        onClick={handleTextExpand}
        className="
        text-sm
        text-primary
        font-semibold 
        flex 
        justify-end 
        cursor-pointer
        pt-2"
      >
        {isCollapse ? "Read Less" : "Read More"}
      </span>
    </div>
  );
};

export default ProductDescription;
