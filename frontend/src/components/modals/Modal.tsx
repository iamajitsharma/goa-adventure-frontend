import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import BeachImage from "../../../public/assets/Login_BG_01.jpg";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import useAuthModal from "@/hook/useAuthModal";
import { Button } from "../common/Button";
import useEnquiryModal from "@/hook/useEnquiryModal";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;

  onSubmit?: any;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  error?: any;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  error,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // useEffect(() => {
  //   setShowModal(isOpen);
  //   if (isOpen) {
  //     document.body.style.overflow = "scroll";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  return (
    <div
      className="
    fixed 
    flex 
    justify-center 
    items-center 
    overflow-x-hidden 
    overflow-y-auto 
    inset-0 
    z-[999] 
    outline-none 
    focus:outline-none 
    bg-neutral-800/70 
   
    "
    >
      <div
        className="
        relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
        "
      >
        <div
          className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
        >
          <div
            className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
          >
            <div className="flex items-center justify-center relative translate">
              <button
                className=" absolute right-0 bg-black text-white text-xl p-2 rounded-tr-xl rounded-bl-xl"
                type="button"
                onClick={handleClose}
              >
                <RxCross1 />
              </button>
            </div>
            <div className="relative p-6 flex-auto">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
