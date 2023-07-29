import React, { useState } from "react";
import dynamic from "next/dynamic";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import LoginModal from "./modals/LoginModal";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Modal from "./modals/Modal";
import RegisterModal from "./modals/RegisterModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
