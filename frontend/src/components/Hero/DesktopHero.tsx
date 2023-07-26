import SearchBar from "../common/SearchBar";
import Image from "next/image";
import travelImage from "../../../public/assets/images/flight.png";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const DesktopHero = () => {
  return (
    <div className="hidden md:block w-full h-screen z-0 overflow-hidden">
      {/* <Image className="w-full h-full object-cover" src={travelImage} alt="" /> */}
      <div className="absolute w-full h-full top-0 right-0 overflow-hidden bg-lightBg">
        <div className="absolute lg:-inset-y-20 md:-inset-y-14 inset-2/4 right-0 bg-primary h-[65%] w-[95%] md:w-full rounded-l-full -rotate-45 -z-5 overflow-hidden"></div>
        <div className="absolute top-0 w-full h-full flex items-center justify-between gap-0 px-10">
          <div className="font-merri w-1/2">
            <h1 className="md:text-6xl lg:text-7xl xl:text-8xl font-merri font-black leading-none text-variant tracking-tighter transition duration-150 ease-in-out">
              Go where you
            </h1>
            <h4 className="md:text-5xl lg:text-6xl font-bold italic leading-none text-variant">
              feel most <span className="text-primary">alive</span>
            </h4>
            <SearchBar />

            <div className="flex items-center gap-4 absolute bottom-5">
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <FaFacebookF />
              </motion.span>
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <AiOutlineInstagram />
              </motion.span>
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <AiOutlineTwitter />
              </motion.span>
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <AiOutlineYoutube />
              </motion.span>
            </div>
          </div>
          <div className="w-1/2 shrink-0 ">
            <Image src={travelImage} alt="" className="z-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;

{
  /* <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center gap-5 text-center text-white p-4">
  <h1 className="text-4xl md:text-5xl font-bold text-slate-200">
    Go where you feel most
    <span className="text-primary"> alive</span>
  </h1>

  <SearchBar />
</div>; */
}
