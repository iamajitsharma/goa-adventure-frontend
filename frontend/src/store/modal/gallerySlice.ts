import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGalleryOpen: false,
};
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    openGalleryModal(state) {
      state.isGalleryOpen = true;
    },
    closeGalleryModal(state) {
      state.isGalleryOpen = false;
    },
  },
});

export const { openGalleryModal, closeGalleryModal } = gallerySlice.actions;
export default gallerySlice.reducer;
