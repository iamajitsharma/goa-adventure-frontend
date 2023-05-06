import React from "react";
import { footerNavigation } from "./FooterLinks";
import FooterTitle from "./FooterTitle";
import Link from "next/link";

const SafarFooter = () => {
  return (
    <div>
      <FooterTitle title={"About Safar"} />
      <div>
        <ul>
          {footerNavigation.about.map((item) => (
            <li className="text-white text-sm leading-loose font-normal">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SafarFooter;
