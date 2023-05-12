import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="shrink-0">
      <Image
        onClick={() => router.push("/")}
        className="w-3/4 cursor-pointer "
        src="/assets/goaadventure_color_logo.svg"
        height="100"
        width="100"
        alt="Goa Adventure"
      />
    </div>
  );
};

export default Logo;
