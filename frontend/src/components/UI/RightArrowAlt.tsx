import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";

const RightArrowAlt = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute right-2 top-1/2 -translate-y-1/2">
      <motion.div
        className="text-lg text-secondary border-2 border-secondary max-w-min p-2 max-h-min w-full h-full rounded-full cursor-pointer hover:bg-white hover:border-white"
        onClick={onClick}
        whileTap={{ scale: 1.5 }}
      >
        <BiRightArrow />
      </motion.div>
    </div>
  );
};

export default RightArrowAlt;
