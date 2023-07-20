import { useCallback, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import Button from "../common/Button";
import Image from "next/image";
import { closeModal } from "@/store/modal/modalSlice";
import { useDispatch } from "react-redux";
import BeachImage from "../../../public/assets/Login_BG_01.jpg";
import { RxCross1 } from "react-icons/rx";
import { FiSmartphone } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { footerNavigation } from "../footer/FooterLinks";

interface ModalProps {
  isOpen?: boolean;
  image?: any;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  socialLogin?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  image,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  socialLogin,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);
  if (!isOpen) {
    return null;
  }

  console.log(onClose);

  return (
    <div
      className="fixed overflow-hidden flex justify-center items-center inset-0 z-[999] outline-none focus:outline-none bg-neutral-800/70 w-screen h-screen"
      onClick={handleClose}
    >
      <Image
        src={BeachImage}
        alt=""
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
      />
      <div className="relative bg-transparent backdrop-blur-lg rounded-xl w-5/6 h-auto p-4 shadow-xl transition ease-in-out duration-300 sm:w-2/3 md:w-1/3">
        {/* Header */}
        <div className="flex items-center justify-center relative">
          <h3 className="text-xl text-white">Login</h3>
          <button
            className=" absolute right-0 bg-black text-white text-2xl p-2 rounded-tr-xl rounded-bl-xl"
            type="button"
            onClick={handleClose}
          >
            <RxCross1 />
          </button>
        </div>
        {/* Body */}
        <div className="relative"></div>
        {/* Footer Start */}
        <div>
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
        {/* Footer End */}
        {/* Social Login */}
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
  );
};

export default Modal;
