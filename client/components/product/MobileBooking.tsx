"use client";
import { Fragment, useState } from "react";
import { Button } from "components/UI/Button";
import Box from "components/UI/Box";
import BookingSlide from "components/modal/BookingSlide";
import { ProductCardProps } from "helper/interface";
import useEnquiryModal from "hooks/useEnquiryModal";

interface MobileBookingProps {
  product: ProductCardProps;
}

const MobileBooking: React.FC<MobileBookingProps> = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  const { handleOpenEnquiry } = useEnquiryModal();

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <Box
        className="
      
      rounded-none 
      fixed 
      bottom-0 
      right-0 
      w-full 
      z-50 
      bg-white 
      p-1 
      shadow-neutral-600
      md:hidden
      "
      >
        {product.category !== "Tour" ? (
          <Button
            size="xl"
            variant="primary"
            onClick={() => setOpenModal(true)}
          >
            Book Now
          </Button>
        ) : (
          <Button onClick={handleOpenEnquiry} variant={"primary"} size={"xl"}>
            Send Enquiry
          </Button>
        )}
      </Box>

      {openModal && (
        <BookingSlide
          isOpen={openModal}
          close={handleClose}
          product={product}
        />
      )}
    </Fragment>
  );
};

export default MobileBooking;
