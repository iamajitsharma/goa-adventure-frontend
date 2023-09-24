import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  prouduct_id: null,
  actualPrice: null,
  priceToBePaid: null,
  quantity: null,
  toDate: null,
  fromDate: null,
};

const productSlice = createSlice({
  name: "loginUserModal",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        title: action.payload.title,
        prouduct_id: action.payload.id,
        actualPrice: action.payload.actualPrice,
        priceToBePaid: action.payload.priceToBePaid,
        quantity: action.payload.quantity,
        toDate: action.payload.toDate,
        fromDate: action.payload.fromDate,
      };
    },
    removeProduct: (state, action) => initialState,
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
