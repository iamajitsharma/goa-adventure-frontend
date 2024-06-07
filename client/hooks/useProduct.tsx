import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeProduct } from "store/features/productSlice";
import { useAppSelector, useAppDispatch } from "store/store";

export const useProduct = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(
    (state: any) => state.product.product.cartItems
  );

  const setProduct = (product: any) => {
    dispatch(addToCart(product));
  };

  const discardProduct = (product: any) => {
    dispatch(removeProduct(product));
  };

  return { product, setProduct, discardProduct };
};
