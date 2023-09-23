import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./modal/authModalSlice";
import loginUserReducer from "./modal/loginUserSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    authModal: authModalReducer,
    loginUser: loginUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
