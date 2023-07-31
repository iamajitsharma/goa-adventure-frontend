import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isEmailLoginModalOpen: false,
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
    openEmailLoginModal: (state) => {
      state.isEmailLoginModalOpen = true;
    },
    closeEmailLoginModal: (state) => {
      state.isEmailLoginModalOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal,
  openEmailLoginModal,
  closeEmailLoginModal,
} = authModalSlice.actions;
export default authModalSlice.reducer;
