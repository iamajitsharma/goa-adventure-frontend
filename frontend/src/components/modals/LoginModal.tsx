import React, { useCallback, useState } from "react";
import Input from "../common/inputs/Input";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import Button from "../common/Button";
import BeachImage from "../../../public/assets/Login_BG_01.jpg";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/store/modal/modalSlice";
import Link from "next/link";
import { FiSmartphone } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";

const LoginModal = () => {
  const dispatch: any = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const bodyContent = (
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
          <input type="checkbox" className="p-2 rounded-sm" />
          Remember me
        </label>
      </div>
    </div>
  );
  const footerContent = (
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
  );

  return (
    <Modal
      image={BeachImage}
      title="Log In"
      actionLabel="Log In"
      secondaryActionLabel="Don't have an account?"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
