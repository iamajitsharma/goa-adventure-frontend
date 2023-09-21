import React, { useState } from "react";
import dynamic from "next/dynamic";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import LoginModal from "./modals/LoginModal";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import RegisterModal from "./modals/RegisterModal";
import EmailLoginModal from "./modals/EmailLoginModal";
import { useRouter } from "next/router";
import FAB from "./FloatingActionButton/FAB";

type LayoutProps = {
  children: React.ReactNode;
};

export const revalidate = 360;
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      {/* <FAB />
        <LoginModal />
        <RegisterModal />
        <EmailLoginModal /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
}
