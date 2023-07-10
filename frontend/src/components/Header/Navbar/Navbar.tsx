import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "@/components/Responsive";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const router = useRouter();
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const navLink = [
    { display: "Home", path: "/" },
    { display: "About Us", path: "/about-us" },
    { display: "Adventure", path: "/activity" },
    { display: "Destination", path: "/destination" },
    { display: "Package", path: "/tour" },
    { display: "Need Help", path: "/contact" },
  ];
  return (
    <div className="hidden md:block z-50">
      <div className="flex items-center justify-between md:space-x-4 lg:space-x-8">
        {navLink.map((item) => (
          <Link
            key={item.display}
            href={item.path}
            className="text-sm  text-variant font-semibold"
          >
            {item.display}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
