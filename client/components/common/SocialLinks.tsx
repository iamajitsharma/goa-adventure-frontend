"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.span
        className="text-2xl text-slate-700 bg-white p-2 shadow-xl rounded-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
      >
        <Link href="https://www.facebook.com/safargoa" target="_blank">
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
        <Link href="https://www.youtube.com/@safartravelgoa" target="_blank">
          <AiOutlineYoutube />
        </Link>
      </motion.span>
    </div>
  );
};

export default SocialLinks;
