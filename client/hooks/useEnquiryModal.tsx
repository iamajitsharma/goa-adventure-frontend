"use client";
import { openEnquiry, closeEnquiry } from "store/features/enquiryModalSlice";
import { useSelector, useDispatch } from "react-redux";

const useEnquiryModal = () => {
  const isEnquiryOpen = useSelector(
    (state: any) => state.enquiryModal.isEnquiryOpen
  );
  const dispatch = useDispatch();

  const handleOpenEnquiry = () => {
    dispatch(openEnquiry());
  };

  const handleCloseEnquiry = () => {
    dispatch(closeEnquiry());
  };
  return {
    isEnquiryOpen,
    handleOpenEnquiry,
    handleCloseEnquiry,
  };
};

export default useEnquiryModal;
