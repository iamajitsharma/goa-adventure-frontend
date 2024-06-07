import { useState } from "react";
export const useToggle = () => {
  const [isToggled, setIsToggle] = useState(false);

  const handleClose = () => {
    setIsToggle(false);
  };

  const toggleFn = () => {
    setIsToggle(true);
  };

  return {
    isToggled,
    toggleFn,
    handleClose,
  };
};
