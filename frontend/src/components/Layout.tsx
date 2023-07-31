import React, { useState } from "react";
import dynamic from "next/dynamic";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import LoginModal from "./Modals/LoginModal";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Modal from "./Modals/Modal";
import RegisterModal from "./Modals/RegisterModal";
import EmailLoginModal from "./Modals/EmailLoginModal";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  if (router.pathname != "/register") {
    return (
      <>
        <LoginModal />
        <RegisterModal />
        <EmailLoginModal />
        <Header />
        {children}
        <Footer />
      </>
    );
  } else {
    return <>{children}</>;
  }
}
