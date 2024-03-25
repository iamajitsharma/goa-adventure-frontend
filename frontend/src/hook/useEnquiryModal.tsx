import React, { use, useState } from "react";
import {
  openEnquiryModal,
  closeEnquiryModal,
} from "@/store/modal/enquiryModalSlice";
import { useSelector, useDispatch } from "react-redux";

const useEnquiryModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.enquiry);

  const openEnquiry = () => {
    dispatch(openEnquiryModal());
  };

  const closeEnquiry = () => {
    dispatch(closeEnquiryModal());
  };

  return {
    isModalOpen,
    openEnquiry,
    closeEnquiry,
  };
};

export default useEnquiryModal;
