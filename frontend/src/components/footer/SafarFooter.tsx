import React from "react";
import { aboutNavLinks } from "./FooterLinks";
import FooterTitle from "./FooterTitle";
import Link from "next/link";
import { TbCircleDot } from "react-icons/tb";

const SafarFooter = () => {
  return (
    <div>
      <FooterTitle title={"About Safar"} />
      <div>
        <ul className="">
          {aboutNavLinks.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 text-sm font-medium tracking-wider leading-loose font-poppins"
            >
              <Link href={item.href} className="flex items-center gap-2">
                <TbCircleDot />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SafarFooter;
