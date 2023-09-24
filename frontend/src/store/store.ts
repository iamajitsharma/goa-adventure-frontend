import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./modal/authModalSlice";
import loginUserReducer from "./modal/loginUserSlice";
import productReducer from "./modal/productSlice";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "userInfo",
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginUserReducer);

export const store = configureStore({
  reducer: {
    authModal: authModalReducer,
    loginUser: persistedReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
