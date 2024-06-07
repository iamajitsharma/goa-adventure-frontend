//import node module libraries
import Link from "next/link";
import Image from "next/image";

const BrandLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo_color.svg"
        alt="goa adventure"
        width={220}
        height={50}
      />
    </Link>
  );
};

export default BrandLogo;
