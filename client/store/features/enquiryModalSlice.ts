"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isEnquiryOpen: false,
};

const enquiryModalSlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    openEnquiry: (state) => {
      state.isEnquiryOpen = true;
    },
    closeEnquiry: (state) => {
      state.isEnquiryOpen = false;
    },
  },
});

export const { openEnquiry, closeEnquiry } = enquiryModalSlice.actions;
export default enquiryModalSlice;
