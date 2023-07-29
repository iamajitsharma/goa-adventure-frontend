import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./modal/authModalSlice";

export const store = configureStore({
  reducer: {
    authModal: authModalReducer,
  },
});
