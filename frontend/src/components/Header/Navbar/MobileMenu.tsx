import React from "react";
import { Disclosure } from "@headlessui/react";

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
    <Disclosure.Panel className="md:hidden bg-white">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {navLink.map((item) => (
          <Disclosure.Button
            key={item.display}
            as="a"
            href={item.path}
            className="block rounded-md px-3 py-2 text-base font-medium"
          >
            {item.display}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
};

export default MobileMenu;
