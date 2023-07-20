import { useCallback } from "react";
import { useDispatch } from "react-redux";

const useLoginModal = ({}) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(onOpen());
  }, [dispatch, onOpen]);
};

export default useLoginModal;
