import React, { useCallback, useState } from "react";
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
import Input from "../common/inputs/Input";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import MobileInput from "../common/inputs/MobileInput";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const isRegisterModalOpen = useSelector(
    (state: any) => state.authModal.isRegisterModalOpen
  );
  const { closeLogin, openRegister, closeRegister, openLogin } = useAuthModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // axios
    //   .post("/api/register", data)
    //   .then(() => {
    //     toast.success("Registered!");
    //     registerModal.onClose();
    //     loginModal.onOpen();
    //   })
    //   .catch((error) => {
    //     toast.error(error);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  //Modal Toggle Function
  const onToggle = useCallback(() => {
    closeRegister();
    openLogin();
  }, [closeRegister, openLogin]);

  const bodyContent = (
    <div className="mt-8 px-4 flex flex-col gap-4">
      <Input
        id="fullname"
        label="Full Name"
        type="text"
        icon={<AiOutlineUser />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <MobileInput
        id="mobilenumber"
        label="Mobile Number"
        type="text"
        icon={<FiSmartphone />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        type="email"
        icon={<AiOutlineMail />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="state"
        label="State"
        type="text"
        icon={<HiChevronDown />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="city"
        label="City"
        type="text"
        icon={<HiChevronDown />}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />

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
        Already have an account?
        <span className="cursor-pointer" onClick={onToggle}>
          Sign In
        </span>
      </h4>
    </div>
  );

  return (
    <Modal
      isOpen={isRegisterModalOpen}
      title="Register"
      actionLabel="Sign In"
      onClose={closeRegister}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
