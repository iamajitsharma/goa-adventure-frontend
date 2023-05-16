import React, { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { RiMenu3Line } from "react-icons/ri";
import Image from "next/image";
import Avatar from "./Avatar";
import Link from "next/link";
import Logo from "./Logo";
import { GrLocation } from "react-icons/gr";
import UserMenu from "./UserMenu";
import Container from "../Container";

const Navbar = () => {
  const currentUser = null;
  return (
    <header className="sticky w-full bg-white z-10 shadow-sm">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3">
          <Logo />
          <div className="w-full md:block hidden">
            <ul className="flex flex-row items-center space-x-8 text-base font-medium">
              <li>
                <div className="hidden md:flex md:items-center md:gap-2 md:bg-gray-300/80 md:px-2 md:py-1 md:text-sm md:font-medium md:rounded-full">
                  <GrLocation fontSize="25" />
                  <span>Explore Destination</span>
                </div>
              </li>
              <li>
                <Link href="/activity">Things To Do</Link>
              </li>
              <li>
                <Link href="/tour-package">Tour Packages</Link>
              </li>
              <li>
                <Link href="/faq">Help</Link>
              </li>
            </ul>
          </div>
          <UserMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
