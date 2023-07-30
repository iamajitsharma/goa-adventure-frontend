import React, { useCallback, useState } from "react";
import Input from "../common/inputs/Input";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import Button from "../common/Button";
import BeachImage from "../../../public/assets/Login_BG_01.jpg";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";
import useAuthModal from "@/hook/useAuthModal";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";

const LoginModal = () => {
  const isLoginModalOpen = useSelector(
    (state: any) => state.authModal.isLoginModalOpen
  );
  const { closeLogin, openRegister } = useAuthModal();

  const SubmitHandler = (e: any) => e.preventDefault();

  const onToggle = useCallback(() => {
    closeLogin();
    openRegister();
  }, [closeLogin, openRegister]);

  const bodyContent = (
    <div className="mt-8 px-4 flex flex-col gap-8">
      <div className="border-b-2 border-neutral-600 flex items-center justify-between">
        <select className="text-base text-neutral-500 w-full border-none bg-transparent focus:ring-0 placeholder:text-neutral-500">
          <option value="india-+91">India(+91)</option>
        </select>
      </div>
      <div className="border-b-2 border-neutral-600 flex items-center justify-between">
        <input
          type="text"
          placeholder="Mobile Number"
          className="text-base text-neutral-600 w-full border-none bg-transparent focus:ring-0 placeholder:text-neutral-500"
        />
        <FiSmartphone className="text-3xl text-neutral-600" />
      </div>

      <div className="flex items-center justify-between text-sm text-neutral-600">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" className="p-2 rounded-sm" />
          Remember me
        </label>
      </div>
    </div>
  );
  const footerContent = (
    <div>
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
      <h4 className="text-center text-sm font-semibold text-neutral-600 py-2">
        Don't have an account?
        <span className="cursor-pointer" onClick={onToggle}>
          Register
        </span>
      </h4>
    </div>
  );

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onClose={closeLogin}
      title="Login"
      actionLabel="Sign In"
      onSubmit={SubmitHandler}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
