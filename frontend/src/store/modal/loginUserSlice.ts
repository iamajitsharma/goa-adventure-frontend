import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginData: null,
};

const loginUserSlice = createSlice({
  name: "loginUserModal",
  initialState,
  reducers: {
    login: (state, action) => {
      return { loginData: action.payload };
    },
    logout: (state, action) => initialState,
  },
});

export const { login, logout } = loginUserSlice.actions;
export default loginUserSlice.reducer;
