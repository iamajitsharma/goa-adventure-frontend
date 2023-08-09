import { useState, useEffect, useCallback } from "react";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import logo from "../../../public/assets/goaadventure_color_logo.svg";
import whiteLogo from "../../../public/assets/Mobile_Whitelogo-01.svg";
import Image from "next/image";
import UserNavigation from "./UserNavigation";
import { useRouter } from "next/router";
import { Button } from "../common/Button";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import useAuthModal from "@/hook/useAuthModal";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { MdSurfing, MdOutlineTour } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { TfiMapAlt } from "react-icons/tfi";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/", icon: <AiOutlineHome /> },
  { name: "Destination", href: "/location", icon: <TfiMapAlt /> },
  { name: "Adventures", href: "/activity", icon: <MdSurfing /> },
  { name: "Tour", href: "/tour", icon: <MdOutlineTour /> },
  { name: "Contact", href: "contact-us", icon: <GrContactInfo /> },
];

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { openLogin } = useAuthModal();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const onToggle = useCallback(() => {
    openLogin();
    handleNav();
  }, [openLogin, handleNav]);

  const router = useRouter();

  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <div
      className={`sticky left-0 top-0 w-full z-[100] ease-in duration-300 text-variant 
      ${
        !scrolled && router.pathname === "/"
          ? "bg-transparent shadow-none"
          : "bg-white shadow-md"
      }
      
      `}
    >
      <div className="max-w-[1260px] m-auto flex justify-between items-center py-2 text-white">
        <div className="w-[250px] h-auto shrink-0 object-fill">
          <Link href="/">
            {router.pathname === "/" && !scrolled && isTablet ? (
              <Image
                src={whiteLogo}
                alt="Your Company"
                className="w-full h-full"
              />
            ) : (
              <Image src={logo} alt="Your Company" className="w-full h-full" />
            )}
          </Link>
        </div>

        <ul className="hidden md:flex md:ml-auto md:mr-2 lg:mr-8 text-variant">
          {navigation.map((item) => (
            <li className="md:p-2 lg:p-4 md:text-sm lg:text-[0.90rem] font-semibold tracking-wide">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {isLogin && <UserNavigation />}
          <motion.span
            className={`
            ${!scrolled && isTablet ? "text-white" : "text-primary"}
            ${
              !scrolled && !isTablet && router.pathname === "/"
                ? "text-white"
                : "text-primary"
            }
         
            
            text-3xl px-3 cursor-pointer`}
            whileTap={{ scale: 1.1 }}
            onClick={() => router.push("/cart")}
          >
            <AiOutlineShoppingCart />
          </motion.span>

          {!scrolled && !isTablet && <Button onClick={openLogin}>Login</Button>}

          {scrolled && !isTablet && (
            <Button onClick={openLogin} variant="primary">
              Login
            </Button>
          )}

          {/* Mobile Button */}
          <div onClick={handleNav} className="block md:hidden z-10">
            {nav ? (
              <AiOutlineClose size={36} className="text-neutral-600 mr-4" />
            ) : (
              <>
                <HiMenuAlt3
                  size={36}
                  style={{
                    color: `${
                      !scrolled && router.pathname === "/"
                        ? "#ffffff"
                        : "#252243"
                    }`,
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
            : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        <Image
          src={logo}
          alt=""
          className="absolute top-0 left-4 md:hidden w-56 h-auto"
        />
        <ul className="flex flex-col gap-4 w-full mx-4">
          {navigation.map((item) => (
            <li
              className="p-2 text-base text-neutral-700 hover:bg-gray-300"
              onClick={handleNav}
            >
              <Link href={"#"}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}

          <Button onClick={onToggle}>Login</Button>
          <Button onClick={onToggle}>Register</Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
