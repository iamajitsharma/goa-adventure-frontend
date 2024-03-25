import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEnquiryModalOpen: false,
};

const enquiryModalSlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    openEnquiryModal: (state) => {
      state.isEnquiryModalOpen = true;
    },
    closeEnquiryModal: (state) => {
      state.isEnquiryModalOpen = false;
    },
  },
});

export const { openEnquiryModal, closeEnquiryModal } =
  enquiryModalSlice.actions;

export default enquiryModalSlice.reducer;
