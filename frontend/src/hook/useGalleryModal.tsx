import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  openGalleryModal,
  closeGalleryModal,
} from "@/store/modal/gallerySlice";

const useGalleryModal = () => {
  const [isOpenGallery, setIsOpenGallery] = useState(false);

  const dispatch = useDispatch();
  const openGallery = () => {
    setIsOpenGallery(true);
    dispatch(openGalleryModal());
  };

  const closeGallery = () => {
    setIsOpenGallery(false);
    dispatch(closeGalleryModal());
  };
  return {
    isOpenGallery,
    openGallery,
    closeGallery,
  };
};

export default useGalleryModal;
