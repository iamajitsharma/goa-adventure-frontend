import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBookingModalOpen: false,
};

const bookingModalSlice = createSlice({
  name: "bookingModal",
  initialState,
  reducers: {
    openBookingModal: (state) => {
      state.isBookingModalOpen = false;
    },
    closeBookingModal: (state) => {
      state.isBookingModalOpen = false;
    },
  },
});

export const { openBookingModal, closeBookingModal } =
  bookingModalSlice.actions;
export default bookingModalSlice.reducer;
