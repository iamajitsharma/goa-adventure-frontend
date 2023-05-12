import React from "react";
import { footerNavigation } from "./FooterLinks";
import FooterTitle from "./FooterTitle";
import Link from "next/link";

const SafarFooter = () => {
  return (
    <div>
      <FooterTitle title={"About Safar"} />
      <div>
        <ul className="flex flex-row gap-1 md:gap-2 md:flex-col ">
          {footerNavigation.about.map((item) => (
            <li className="text-gray-700 text-sm leading-loose font-poppins">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SafarFooter;
