import { Button } from "components/UI/Button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/message/DTDFZ2OFJPEYF1"
      className="fixed left-3 bottom-36 rounded-full z-[999]"
      target="_blank"
    >
      <Image src="/whatsapp.svg" alt="goa adventure" width={48} height={48} />
    </Link>
  );
};

export default WhatsAppButton;
