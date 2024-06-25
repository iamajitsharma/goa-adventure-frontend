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
import { BsPatchQuestion } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import CustomBadge from "components/common/CustomBadge";
import { useProduct } from "hooks/useProduct";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const { isScrolled } = useScrolled();
  const pathname = usePathname();
  const router = useRouter();
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const { products } = useProduct();

  const { isEnquiryOpen, handleOpenEnquiry, handleCloseEnquiry } =
    useEnquiryModal();

  return (
    <Fragment>
      <div className="flex items-center z-0">
        <ul
          className={`hidden md:flex md:ml-auto ${pathname === "/" && !isScrolled ? "text-white" : "text-black"}`}
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
        <div className="flex items-center gap-3">
          <Button
            size={"xs"}
            onClick={() => handleOpenEnquiry()}
            className="hidden md:block"
          >
            Enquiry
          </Button>
          <div
            className="flex items-center gap-4 relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <BsPatchQuestion
              size={28}
              className={`md:hidden ${pathname === "/" && !isScrolled ? "text-white" : "text-gray-600"}`}
              onClick={() => handleOpenEnquiry()}
            />
            <IoCartOutline
              size={28}
              className={`${pathname === "/" && !isScrolled ? "text-white" : "text-gray-600"}`}
            />
            <CustomBadge
              content={products.length}
              pill
              className="text-sm absolute -top-4 -right-4"
              bg="bg-orange-500"
            />
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isEnquiryOpen}
        closeModal={handleCloseEnquiry}
        title="Send Enquiry"
      >
        <EnquiryForm />
      </Modal>
    </Fragment>
  );
};

export default Navigation;
