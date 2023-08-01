import React from "react";
import Mountain from "../../public/assets/images/Mountain.jpg";
import BeachImage from "../../public/assets/Login_BG_01.jpg";
import Image from "next/image";
import { MdEmail, MdFacebook } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import { FaTwitter, FaGoogle, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
// import LoginModal from "@/components/Modals/LoginModal";
// import Modal from "@/components/Modals/Modal";

const login = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center font-poppins">
      <Image
        src={BeachImage}
        alt=""
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <div className="relative bg-transparent backdrop-blur-lg rounded-xl w-5/6 h-5/6 p-4 shadow-xl transition ease-in-out duration-300 sm:w-2/3 md:w-1/3 md:h-2/3">
          <span className="absolute right-1 top-1 bg-black text-white text-2xl p-2 rounded-tr-xl rounded-bl-xl">
            <RxCross1 />
          </span>
          <h2 className="text-center text-slate-100 text-3xl font-semibold">
            Login
          </h2>
          <div className="mt-8 px-4 flex flex-col gap-8">
            <div className="border-b-2 border-gray-300 flex items-center justify-between">
              <select className="text-base text-slate-100 w-full border-none bg-transparent focus:ring-0 placeholder:text-slate-100">
                <option value="india-+91">India(+91)</option>
              </select>
            </div>
            <div className="border-b-2 border-gray-300 flex items-center justify-between">
              <input
                type="text"
                placeholder="Mobile Number"
                className="text-base text-gray-300 w-full border-none bg-transparent focus:ring-0 placeholder:text-slate-100"
              />
              <FiSmartphone className="text-3xl text-gray-300" />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-slate-950 text-white text-lg rounded-md"
            >
              Login
            </button>
            <span className="text-sm text-gray-300 text-center">
              Don't have an account?<Link href="#"> Register</Link>
            </span>
          </div>
          <div className="flex items-center justify-center gap-6 text-xl px-4 py-4 text-gray-300">
            <motion.span
              className="border-2 border-gray-300 p-2 rounded-md"
              whileHover={{ scale: 1.1 }}
            >
              <FaGoogle />
            </motion.span>
            <motion.span
              className="border-2 border-gray-300 p-2 rounded-md"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebookF className="" />
            </motion.span>
            <motion.span
              className="border-2 border-gray-300 p-2 rounded-md"
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter />
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
