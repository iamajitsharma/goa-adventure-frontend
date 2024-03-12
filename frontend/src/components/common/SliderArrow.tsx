import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";

export const LeftArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute right-14 -top-7">
      <motion.div
        className="text-2xl text-white bg-secondary border-2 border-secondary max-w-min p-2 max-h-min w-full h-full rounded-full cursor-pointer "
        onClick={onClick}
        whileTap={{ scale: 1.5 }}
      >
        <BiLeftArrow />
      </motion.div>
    </div>
  );
};

export const RightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute right-0 -top-7">
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
