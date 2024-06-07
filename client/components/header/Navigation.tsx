"use client";
//import routes files
import { Button } from "components/UI/Button";
import Link from "next/link";
import { headerLinks } from "routes/headerLinks";
import { useScrolled } from "hooks/useScrolled";
import { usePathname } from "next/navigation";
import { deviceSize } from "components/common/DeviceSize";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import Modal from "components/modal/Modal";
import { useToggle } from "hooks/useToggle";
import EnquiryForm from "components/common/EnquiryForm";
import useEnquiryModal from "hooks/useEnquiryModal";

const Navigation = () => {
  const { isScrolled } = useScrolled();
  const pathname = usePathname();
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  const { isEnquiryOpen, handleOpenEnquiry, handleCloseEnquiry } =
    useEnquiryModal();

  return (
    <Fragment>
      <div className="flex items-center z-0">
        <ul
          className={`hidden md:flex md:ml-auto md:mr-2 lg:mr-8 ${pathname === "/" && !isScrolled ? "text-white" : "text-black"}`}
        >
          {headerLinks.map((item) => (
            <li
              key={item.id}
              className="md:p-2 lg:p-4 md:text-[11px] lg:text-[0.90rem] font-medium tracking-wide"
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Button
          size={isTablet ? "xs" : "default"}
          onClick={() => handleOpenEnquiry()}
        >
          Send Enquiry
        </Button>
      </div>
      <Modal
        isModalOpen={isEnquiryOpen}
        closeModal={handleCloseEnquiry}
        children={<EnquiryForm />}
        title="Send Enquiry"
      />
    </Fragment>
  );
};

export default Navigation;
