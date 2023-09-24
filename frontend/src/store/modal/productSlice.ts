import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: null,
  prouduct_id: null,
  prouductPrice: null,
  quantity: null,
};

const productSlice = createSlice({
  name: "loginUserModal",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        productName: action.payload.title,
        prouduct_id: action.payload.id,
        prouductPrice: action.payload.price,
        quantity: action.payload.quantity,
      };
    },
    removeProduct: (state, action) => initialState,
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
