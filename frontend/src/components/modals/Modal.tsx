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
import Button from "../common/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
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
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const { closeLogin } = useAuthModal();

  useEffect(() => {
    setShowModal(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [closeLogin, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed overflow-hidden flex justify-center items-center inset-0 z-[999] outline-none focus:outline-none bg-neutral-800/70 w-screen h-screen">
        <div
          className={`relative bg-white backdrop-blur-lg rounded-xl p-6 overflow-hidden shadow-xl transition ease-in-out duration-300  max-w-lg w-full 
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="flex items-center justify-center relative translate">
            <h3 className="text-lg font-semibold tracking-wide text-neutral-700">
              {title}
            </h3>
            <button
              className=" absolute right-0 bg-black text-white text-xl p-2 rounded-tr-xl rounded-bl-xl"
              type="button"
              onClick={handleClose}
            >
              <RxCross1 />
            </button>
          </div>
          {/* Body */}
          <div className="relative max-h-[2/5]">{body}</div>
          {/* Modal Action */}
          <div className="relative py-4">
            <Button
              label={actionLabel}
              white={false}
              fullWidth
              onClick={onSubmit}
            />
          </div>
          <div>{footer}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
