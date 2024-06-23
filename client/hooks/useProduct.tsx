"use client";
import { useState } from "react";
import {
  addToCart,
  updateCartItem,
  applyCoupon,
  removeProduct,
  applyDeposit,
  clearCart,
} from "store/features/productSlice";
import { useAppSelector, useAppDispatch } from "store/store";

export const useProduct = () => {
  const [iscouponFound, setIsCouponFound] = useState<boolean | null>(null);

  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: any) => state.product.product.cartItems
  );

  const cartSummary = useAppSelector(
    (state: any) => state.product.product.cartSummary
  );

  const couponCodes = useAppSelector(
    (state: any) => state.product.product.couponCodes
  );

  const setProduct = (product: any) => {
    dispatch(addToCart(product));
  };

  const discardProduct = (id: any) => {
    dispatch(removeProduct(id));
  };

  const applyCouponCode = (coupon: string) => {
    const couponInfo = couponCodes.find(
      (code: any) => code.code.toLowerCase() === coupon.toLowerCase()
    );

    if (couponInfo) {
      setIsCouponFound(true);
      dispatch(
        applyCoupon({
          coupon: couponInfo.code,
          discount: couponInfo.discount,
          discountAmount: (cartSummary.subTotal * couponInfo.discount) / 100,
          couponFound: true,
        })
      );
    } else {
      setIsCouponFound(false);
      dispatch(
        applyCoupon({ coupon: coupon, discount: 0, couponFound: false })
      );
    }
  };

  const handleDeposit = (totalAmount: number, percent: number) => {
    dispatch(
      applyDeposit({
        depositAmount: (totalAmount * percent) / 100,
        depositPercent: percent,
      })
    );
  };

  const clearCartItem = () => {
    dispatch(clearCart());
  };

  return {
    products,
    cartSummary,
    setProduct,
    discardProduct,
    applyCouponCode,
    handleDeposit,
    clearCartItem,
  };
};
