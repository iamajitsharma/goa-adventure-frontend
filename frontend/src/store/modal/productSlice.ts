import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  product_title: null,
  price: null,
  salePrice: null,
  quantity: null,
  activityDate: null,
  deposit: null,
  image: null,
  meeting_point: null,
};

const productSlice = createSlice({
  name: "loginUserModal",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("STATE VALUE", state);

      return {
        id: action.payload._id,
        product_title: action.payload.product_title,
        price: action.payload.price,
        salePrice: action.payload.salePrice,
        quantity: action.payload.quantity,
        activityDate: action.payload.activityDate,
        deposit: action.payload.deposit,
        image: action.payload.image,
        meeting_point: action.payload.meeting_point,
      };
    },
    removeProduct: (state, action) => initialState,
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
