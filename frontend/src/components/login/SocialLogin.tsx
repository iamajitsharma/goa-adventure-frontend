import { useCallback } from "react";
import { motion } from "framer-motion";
import React from "react";
import { FaGoogle, FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";
import useAuthModal from "@/hook/useAuthModal";

const SocialLogin = () => {
  const { closeLogin, closeRegister, openEmailLogin } = useAuthModal();

  const onToggle = useCallback(() => {
    closeLogin();
    closeRegister();
    openEmailLogin();
  }, [closeLogin, closeRegister, openEmailLogin]);

  return (
    <div className="flex items-center justify-center gap-6 text-xl px-4 py-4 text-neutral-500">
      <motion.span
        className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <FaGoogle />
      </motion.span>
      <motion.span
        className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <FaFacebookF />
      </motion.span>
      <motion.span
        className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <FaTwitter />
      </motion.span>
      <motion.span
        className="border-2 border-neutral-400 p-2 rounded-md cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={onToggle}
      >
        <FaEnvelope />
      </motion.span>
    </div>
  );
};

export default SocialLogin;
