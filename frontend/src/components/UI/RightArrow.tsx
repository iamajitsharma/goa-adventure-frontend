import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";

const RightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute right-0 -top-16">
      <motion.div
        className="text-2xl text-secondary border-2 border-secondary max-w-min p-2 max-h-min w-full h-full rounded-full cursor-pointer "
        onClick={onClick}
        whileTap={{ scale: 1.5 }}
      >
        <BiRightArrow />
      </motion.div>
    </div>
  );
};

export default RightArrow;
