import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import logo from "../../../public/assets/goaadventure_color_logo.svg";
import whiteLogo from "../../../public/assets/Mobile_Whitelogo-01.svg";
import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import UserNavigation from "./Navbar/UserNavigation";
import MobileMenu from "./Navbar/MobileMenu";
import { useRouter } from "next/router";
import Button from "../common/Button";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Adventures", href: "#" },
  { name: "Tour", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  console.log(router);

  return (
    <Disclosure
      as="nav"
      className={`${
        router.route === "/" ? "" : "bg-red-200"
      } w-full relative h-auto`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto w-full sm:px-6 py-2 z-50 ">
            <div className="flex items-center justify-start gap-0 w-full">
              <div className="flex items-center justify-between gap-4 md:gap-0 w-full">
                <div className="flex-shrink-0 object-fill max-w-full h-auto md:w-[250px] z-50">
                  {isTablet ? (
                    <Image src={whiteLogo} alt="Your Company" className="" />
                  ) : (
                    <Image src={logo} alt="Your Company" className="" />
                  )}
                </div>
                <Navbar />
                {isLogin ? (
                  <UserNavigation />
                ) : (
                  <Button
                    className="hidden md:inline-flex z-50"
                    label="Login"
                    icon={<CiLogin fontSize={20} />}
                    small
                    white
                  />
                )}
              </div>

              <div className="flex md:hidden z-50">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-white inline-flex items-center justify-center rounded-md p-2 outline-none cursor-pointer pr-5">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <MobileMenu />
        </>
      )}
    </Disclosure>
  );
};

export default Header;
