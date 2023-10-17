import {
  closeLoginModal,
  closeRegisterModal,
  openLoginModal,
  openRegisterModal,
  openForgetModal,
  closeForgetModal,
  openEmailOTPModal,
  closeEmailOTPModal,
} from "@/store/modal/authModalSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuthModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isForgetModalOpen, setIsForgetModalOpen] = useState(false);
  const [isEmailOTPModalOpen, setIsEmailOTPModalOpen] = useState(false);

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

  const openForget = () => {
    setIsForgetModalOpen(true);
    dispatch(openForgetModal());
  };

  const closeForget = () => {
    setIsForgetModalOpen(false);
    dispatch(closeForgetModal());
  };

  const openEmailOTP = () => {
    setIsEmailOTPModalOpen(true);
    dispatch(openEmailOTPModal);
  };

  const closeEmailOTP = () => {
    setIsEmailOTPModalOpen(false);
    dispatch(closeEmailOTPModal);
  };

  return {
    isLoginModalOpen,
    isRegisterModalOpen,
    isForgetModalOpen,
    openLogin,
    closeLogin,
    openRegister,
    closeRegister,
    openForget,
    closeForget,
    openEmailOTP,
    closeEmailOTP,
  };
};

export default useAuthModal;
