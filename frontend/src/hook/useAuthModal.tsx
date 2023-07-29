import {
  closeLoginModal,
  closeRegisterModal,
  openLoginModal,
  openRegisterModal,
} from "@/store/modal/authModalSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuthModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openLogin = () => {
    setIsLoginModalOpen(true);
    dispatch(openLoginModal());
  };
  const closeLogin = () => {
    setIsLoginModalOpen(false);
    dispatch(closeLoginModal());
  };

  const openRegister = () => {
    setIsRegisterModalOpen(true);
    dispatch(openRegisterModal());
  };
  const closeRegister = () => {
    setIsRegisterModalOpen(false);
    dispatch(closeRegisterModal());
  };

  return {
    isLoginModalOpen,
    isRegisterModalOpen,
    openLogin,
    closeLogin,
    openRegister,
    closeRegister,
  };
};

export default useAuthModal;
