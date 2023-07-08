import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  isOpen?: boolean;
  children: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, children }) => {
  const [isActive, setIsActive] = useState(isOpen);

  const toggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <motion.div
        className="flex items-center gap-3 cursor-pointer p-2 rounded-md"
        initial={false}
        animate={{ backgroundColor: isActive ? "#FF8359" : "#f4f4f4" }}
        onClick={toggleHandler}
      >
        <span
          className={`text-2xl w-8 h-8 rounded-md flex items-center justify-center shadow-md ${
            isActive ? "bg-white text-primary" : "bg-primary text-white"
          }`}
          onClick={toggleHandler}
        >
          {isActive ? (
            <IoIosArrowDown
              className={`${
                isActive ? "rotate-180" : "rotate-0"
              } transition duration-500`}
            />
          ) : (
            <IoIosArrowDown className="transition duration-500" />
          )}
        </span>
        <h4
          className={`text-base font-semibold tracking-wider ${
            isActive ? "text-white" : "text-neutral-600"
          }`}
        >
          {title}
        </h4>
      </motion.div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              className="py-4 text-sm text-textBlack leading-loose transition duration-1000 ease-in-out"
              variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
