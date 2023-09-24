import { addProduct, removeProduct } from "@/store/modal/productSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useAppSelector } from "@/store/store";

const useProduct = () => {
  const dispatch = useDispatch();

  const product = useAppSelector((state) => state.product);
  const setProduct = (product: any) => {
    return dispatch(addProduct(product));
  };
  const discardProduct = (product: any) => {
    return dispatch(removeProduct(product));
  };
  return { product, setProduct, discardProduct };
};

export default useProduct;
