import Link from "next/link";
import React from "react";
import { quickLinks } from "routes/footerLinks";
import FooterTitle from "./FooterTitle";

const QuickLinks = () => {
  return (
    <div>
      <FooterTitle title="Quick Links" />
      <ul>
        {quickLinks.map((item) => (
          <li
            key={item.id}
            className="text-neutral-700 font-medium text-sm py-3 list-disc"
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
