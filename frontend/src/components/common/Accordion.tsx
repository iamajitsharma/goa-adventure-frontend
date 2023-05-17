import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="shadow-sm rounded-md mt-4">
      <div className="flex flex-row gap-4 items-center">
        <div>
          {isActive ? (
            <IoIosArrowUp className="w-6 h-6 text-mainColor" />
          ) : (
            <IoIosArrowDown className="w-6 h-6 text-mainColor" />
          )}
        </div>
        <div
          className="flex flex-col items-start justify-center gap-4 p-4 cursor-pointer transition ease-out duration-400"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="text-base font-bold text-textBlack">{title}?</div>
          {isActive && (
            <div className="transition ease-out duration-400">{content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
