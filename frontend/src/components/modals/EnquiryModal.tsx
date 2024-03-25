import React, { Fragment, useState, useEffect, useCallback } from "react";
import Modal from "./Modal";
import EnquiryForm from "../Form/EnquiryForm";
import { RxCross1 } from "react-icons/rx";
import { Button } from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeEnquiryModal } from "@/store/modal/enquiryModalSlice";

const EnquiryModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.enquiry);

  const handleClose = () => {
    dispatch(closeEnquiryModal());
  };

  if (isModalOpen) {
    return (
      <div
        className="justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70"
      >
        <div
          className=" relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto"
        >
          <div
            className="
              translate
              h-full
              lg:h-2/5
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
          >
            <div className="bg-white p-8 rounded shadow-md">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => handleClose()}
              >
                Close
              </button>
              <div className="relative pt-8 flex-auto">
                {/* <EnquiryForm /> */}
                <Button variant="dark" size="lg" className="w-full text-xl">
                  +91 7387960861
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default EnquiryModal;
