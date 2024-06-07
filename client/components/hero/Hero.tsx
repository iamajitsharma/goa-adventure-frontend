import Image from "next/image";

const Hero = () => {
  return (
    <div className="hidden md:block w-full h-screen z-0 overflow-hidden">
      <div className="absolute w-full h-full top-0 right-0 overflow-hidden bg-lightBg">
        <div className="absolute lg:-inset-y-32 md:-inset-y-16 inset-2/4 right-0 bg-orange-500 h-3/4 w-3/4 md:w-full rounded-l-full -rotate-45 -z-5 overflow-hidden"></div>
        <div className="absolute top-0 w-full h-full flex items-center justify-between gap-0 px-10">
          <div className="font-merri w-1/2">
            <h1 className="md:text-6xl lg:text-7xl xl:text-8xl font-merri font-black leading-none text-slate-800 tracking-tighter transition duration-150 ease-in-out">
              Go where you
            </h1>
            <h4 className="md:text-5xl lg:text-6xl font-bold italic leading-none text-variant">
              feel most <span className="text-primary">alive</span>
            </h4>
            {/* <SearchBar /> */}

            {/* <div className="flex items-center gap-4 absolute bottom-5">
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <Link
                  href={"https://www.facebook.com/safargoa"}
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </motion.span>
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <Link href="https://www.instagram.com/safarkvlogs/">
                  <AiOutlineInstagram />
                </Link>
              </motion.span>
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <Link href="https://x.com/goa_adventure?s=21&t=_NU2Ix56hVPI8DAj0_b2uw">
                  <AiOutlineTwitter />
                </Link>
              </motion.span>
              <motion.span
                className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
              >
                <Link
                  href="https://www.youtube.com/@safartravelgoa"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </Link>
              </motion.span>
            </div> */}
          </div>
          <div className="w-1/2 shrink-0 ">
            <Image
              src={"/images/flight.png"}
              alt=""
              width={700}
              height={700}
              className="z-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
