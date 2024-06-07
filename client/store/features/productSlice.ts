import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface CartItemProps {
  id: string;
  product_title: string;
  price: number;
  salePrice: number;
  quantity: number;
  activityDate: string;
  deposit: number;
  image: any;
  meeting_point: string[];
  location: string;
  discount: number;
}

interface ProductState {
  cartItems: CartItemProps[];
  cartSummary: {
    subTotal: number;
    discount: number;
    coupon: string;
  };
  couponCodes: { code: string; discount: number }[];
}

const initialState: ProductState = {
  cartItems: [],
  cartSummary: {
    subTotal: 0,
    discount: 0,
    coupon: "",
  },
  couponCodes: [{ code: "SAFAR25", discount: 5 }],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemProps>) {
      const newItem: CartItemProps = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        toast.error("Product is already added in the cart");
      } else {
        state.cartItems.push({
          id: newItem.id,
          product_title: newItem.product_title,
          price: newItem.price,
          salePrice: newItem.salePrice,
          quantity: newItem.quantity,
          activityDate: newItem.activityDate,
          deposit: newItem.deposit,
          image: newItem.image,
          meeting_point: newItem.meeting_point,
          location: newItem.location,
          discount: newItem.discount,
        });

        toast.success("Product is successfully added");
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeProduct } = productSlice.actions;
export default productSlice.reducer;
