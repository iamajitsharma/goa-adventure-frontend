import React from "react";
import ErrorImage from "../../public/assets/Error Page.svg";
import Image from "next/image";

export default function Error() {
  return (
    <div className="w-screen h-screen">
      <Image src={ErrorImage} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
