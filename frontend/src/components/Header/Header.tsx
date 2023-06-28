import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../Container";
import Button from "../UI/Button";

const Header = () => {
  const router = useRouter();
  const headerRef: React.MutableRefObject<any> = useRef();

  const stickyHeaderFn = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  console.log(router.pathname);

  useEffect(() => {
    stickyHeaderFn();
    return () => window.removeEventListener("scroll", stickyHeaderFn);
  }, []);

  return (
    <header
      className={`w-full ${
        router.pathname === "/" ? "bg-orange-50" : "bg-white"
      }`}
      ref={headerRef}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <div className="shrink-0">
          <Image
            onClick={() => router.push("/")}
            className="w-3/4 cursor-pointer "
            src="/assets/goaadventure_color_logo.svg"
            height="100"
            width="100"
            alt="Goa Adventure"
          />
        </div>
        <Navbar />
        <button className="text-sm tracking-wide font-medium bg-white shadow-sm min-w-fit px-4 py-2 rounded-md">
          Log In
        </button>
      </nav>
    </header>
  );
};

export default Header;
