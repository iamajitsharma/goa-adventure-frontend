import { addProduct, removeProduct } from "@/store/modal/productSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useAppSelector } from "@/store/store";

const useCustomer = () => {
  const dispatch = useDispatch();

  const product = useAppSelector((state) => state.product);
  const setProduct = (customer: any) => {
    return dispatch(addProduct(customer));
  };
  const discardProduct = (customer: any) => {
    return dispatch(removeProduct(customer));
  };
  return { product, setProduct, discardProduct };
};

export default useCustomer;
