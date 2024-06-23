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
  meeting_point: string;
  location: string;
  discount: number;
  totalPrice: number;
}

interface ProductState {
  cartItems: CartItemProps[];
  cartSummary: {
    subTotal: number;
    discountAmount: number;
    depositAmount: number;
    depositPercent: number;
    discount: number;
    coupon: string;
    couponFound: boolean;
  };
  couponCodes: { code: string; discount: number }[];
}

const initialState: ProductState = {
  cartItems: [],
  cartSummary: {
    subTotal: 0,
    discount: 0,
    discountAmount: 0,
    depositAmount: 0,
    depositPercent: 25,
    coupon: "",
    couponFound: false,
  },
  couponCodes: [
    { code: "SAFAR10", discount: 10 },
    { code: "SAFAR25", discount: 25 },
    { code: "SAFAR30", discount: 30 },
  ],
};

const calculateSubTotal = (cartItems: CartItemProps[]): number => {
  return cartItems.reduce((total, item) => total + item.totalPrice, 0);
};

const calculateDiscountAmount = (
  subTotal: number,
  discount: number
): number => {
  return (subTotal * discount) / 100;
};

const calculateDepositAmount = (
  subTotal: number,
  discount: number,
  percent: number
) => {
  return ((subTotal - discount) * percent) / 100;
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
          totalPrice: newItem.salePrice * newItem.quantity,
        });

        toast.success("Product is successfully added");

        state.cartSummary.subTotal = calculateSubTotal(state.cartItems);
        state.cartSummary.discountAmount = calculateDiscountAmount(
          state.cartSummary.subTotal,
          state.cartSummary.discount
        );
        state.cartSummary.depositAmount = calculateDepositAmount(
          state.cartSummary.subTotal,
          state.cartSummary.discountAmount,
          state.cartSummary.depositPercent
        );
      }
    },
    updateCartItem(state, action) {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      let currentItem = state.cartItems[index];
      currentItem.quantity = action.payload.quantity;
      currentItem.totalPrice = currentItem.salePrice * action.payload.quantity;
      state.cartSummary.subTotal = calculateSubTotal(state.cartItems);
      state.cartSummary.discountAmount = calculateDiscountAmount(
        state.cartSummary.subTotal,
        state.cartSummary.discount
      );
      state.cartSummary.depositAmount = calculateDepositAmount(
        state.cartSummary.subTotal,
        state.cartSummary.discountAmount,
        state.cartSummary.depositPercent
      );
    },
    applyCoupon(state, action) {
      state.cartSummary.coupon = action.payload.coupon;
      state.cartSummary.discount = action.payload.discount;
      state.cartSummary.discountAmount = action.payload.discountAmount;
      state.cartSummary.couponFound = action.payload.couponFound;
      state.cartSummary.depositAmount = calculateDepositAmount(
        state.cartSummary.subTotal,
        state.cartSummary.discountAmount,
        state.cartSummary.depositPercent
      );
    },
    applyDeposit(state, action) {
      state.cartSummary.depositAmount = action.payload.depositAmount;
      state.cartSummary.depositPercent = action.payload.depositPercent;
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      if (state.cartItems.length === 0) {
        state.cartSummary = {
          subTotal: 0,
          discount: 0,
          discountAmount: 0,
          depositAmount: 0,
          depositPercent: 0,
          coupon: "",
          couponFound: false,
        };
      }

      state.cartSummary.subTotal = calculateSubTotal(state.cartItems);
      state.cartSummary.discountAmount = calculateDiscountAmount(
        state.cartSummary.subTotal,
        state.cartSummary.discount
      );
      state.cartSummary.depositAmount = calculateDepositAmount(
        state.cartSummary.subTotal,
        state.cartSummary.discountAmount,
        state.cartSummary.depositPercent
      );
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartSummary = {
        subTotal: 0,
        discount: 0,
        discountAmount: 0,
        depositAmount: 0,
        depositPercent: 25,
        coupon: "",
        couponFound: false,
      };
    },
  },
});

export const {
  addToCart,
  updateCartItem,
  removeProduct,
  applyCoupon,
  applyDeposit,
  clearCart,
} = productSlice.actions;
export default productSlice.reducer;
