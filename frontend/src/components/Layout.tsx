import React, { useState } from "react";
import dynamic from "next/dynamic";
import Footer from "./footer/Footer";
import Header from "./Header/Header";

const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  ssr: false,
});

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
