import React, { useState } from "react";
import dynamic from "next/dynamic";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import LoginModal from "./modals/LoginModal";
import Modal from "./modals/Modal";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "@/store/store";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen } = useSelector((state: any) => state.modal);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
