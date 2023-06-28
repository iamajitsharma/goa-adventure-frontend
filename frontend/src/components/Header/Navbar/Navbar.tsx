import React from "react";
import Link from "next/link";
const Navbar = () => {
  const navLink = [
    { display: "Home", path: "/" },
    { display: "About Us", path: "/about-us" },
    { display: "Adventure", path: "/activity" },
    { display: "Destination", path: "/destination" },
    { display: "Package", path: "/tour" },
    { display: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <ul className="flex md:flex-row items-center gap-6 font-semibold">
        {navLink.map((item, index) => (
          <li key={index} className="text-sm tracking-wide">
            <Link href={item.path}>{item.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
