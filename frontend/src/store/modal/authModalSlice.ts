import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isForgetModalOpen: false,
  isEmailOTPModalOpen: false,
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    openRegisterModal: (state) => {
      state.isRegisterModalOpen = true;
    },
    closeRegisterModal: (state) => {
      state.isRegisterModalOpen = false;
    },
    openForgetModal: (state) => {
      state.isForgetModalOpen = true;
    },
    closeForgetModal: (state) => {
      state.isForgetModalOpen = false;
    },
    openEmailOTPModal: (state) => {
      state.isEmailOTPModalOpen = true;
    },

    closeEmailOTPModal: (state) => {
      state.isEmailOTPModalOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal,
  openForgetModal,
  closeForgetModal,
  openEmailOTPModal,
  closeEmailOTPModal,
} = authModalSlice.actions;
export default authModalSlice.reducer;
