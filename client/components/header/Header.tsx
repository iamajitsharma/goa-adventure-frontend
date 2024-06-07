"use client";
import Link from "next/link";
import Container from "../UI/Container";
import BrandLogo from "../common/BrandLogo";
import Navigation from "./Navigation";
import { useScrolled } from "hooks/useScrolled";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "components/common/DeviceSize";

const Header = () => {
  const { isScrolled } = useScrolled();
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const pathname = usePathname();

  const companyLogo =
    pathname === "/" && !isScrolled ? "/logo_white.svg" : "/logo_color.svg";

  return (
    <section
      className={`sticky top-0 w-full z-[100] ease-in duration-300 text-variant py-1 ${isScrolled ? "shadow bg-white" : ""}`}
    >
      <Container>
        <div className="flex items-center justify-between w-full py-2">
          <div>
            <Link href={"/"}>
              <Image
                src={companyLogo}
                alt=""
                width={220}
                height={50}
                className="w-3/4 h-auto"
              />
            </Link>
          </div>
          <Navigation />
        </div>
      </Container>
    </section>
  );
};

export default Header;
