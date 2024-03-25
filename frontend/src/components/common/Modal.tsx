// components/Modal.js
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/modal/modalSlice";
import EnquiryForm from "../Form/EnquiryForm";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="absolute top-2 right-2 bg-black rounded-full text-white p-1">
              <IoMdClose size={24} onClick={handleClose} />
            </span>

            <EnquiryForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
