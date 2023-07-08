import React from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { CiLogin } from "react-icons/ci";

const navLink = [
  { display: "Home", path: "/" },
  { display: "About Us", path: "/about-us" },
  { display: "Adventure", path: "/activity" },
  { display: "Destination", path: "/destination" },
  { display: "Package", path: "/tour" },
  { display: "Contact", path: "/contact" },
];

const MobileMenu = () => {
  return (
    <Disclosure.Panel className="md:hidden bg-white z-40">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {navLink.map((item) => (
          <Disclosure.Button
            key={item.display}
            as="a"
            href={item.path}
            className="block rounded-md px-3 py-1 text-sm font-medium font-poppins hover:bg-lightBg hover:font-semibold"
          >
            {item.display}
          </Disclosure.Button>
        ))}

        <motion.button
          type="button"
          className="w-full py-2 bg-primary text-white text-base font-semibold uppercase px-6 rounded-lg tracking-widest hover:border-2 hover:border-neutral-800 hover:bg-white hover:text-neutral-800 inline-flex items-center justify-center gap-2"
          whileTap={{ scale: 1.1 }}
        >
          <CiLogin fontSize={26} className="" /> Login
        </motion.button>
      </div>
    </Disclosure.Panel>
  );
};

export default MobileMenu;
