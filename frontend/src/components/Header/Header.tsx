import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import logo from "../../../public/assets/goaadventure_color_logo.svg";
import whiteLogo from "../../../public/assets/Mobile_Whitelogo-01.svg";
import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import UserNavigation from "./UserNavigation";
import MobileMenu from "./Navbar/MobileMenu";
import { useRouter } from "next/router";
import Button from "../common/Button";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { openModal } from "@/store/modal/modalSlice";
import { useDispatch } from "react-redux";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "about-us" },
  { name: "Adventures", href: "activity" },
  { name: "Tour", href: "tour" },
  { name: "Contact", href: "contact-us" },
];

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dispatch: any = useDispatch();

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
      }`}
    >
      <div className="max-w-[1260px] m-auto flex justify-between items-center p-2 px-4 text-white">
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

        <ul className="hidden md:flex text-variant">
          {navigation.map((item) => (
            <li className="md:p-2 lg:p-4 md:text-sm lg:text-[0.90rem] font-semibold tracking-wide">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {!isLogin && <UserNavigation />}

          {router.pathname === "/" && !scrolled && !isTablet && (
            <Button
              label="Login"
              icon={<CiLogin fontSize={20} />}
              className="z-50"
              white
              onClick={() => dispatch(openModal)}
            />
          )}

          {scrolled && !isTablet && (
            <Button
              label="Login"
              icon={<CiLogin fontSize={20} />}
              className="z-50"
              filled
              onClick={() => dispatch(openModal)}
            />
          )}

          {/* Mobile Button */}
          <div onClick={handleNav} className="block md:hidden z-10">
            {nav ? (
              <AiOutlineClose size={36} style={{ color: "#ffffff" }} />
            ) : (
              <HiMenuAlt3
                size={36}
                style={{
                  color: `${
                    !scrolled && router.pathname === "/" ? "#ffffff" : "#252243"
                  }`,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        <ul className="flex flex-col gap-4">
          {navigation.map((item) => (
            <li className="className='p-4 text-xl text-white hover:text-gray-500">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
          <Button label="Login" white fullWidth />
        </ul>
      </div>
    </div>
  );
};

export default Header;
