//import node module libraries
import { useState, useCallback } from "react";

const useToggle = (init = false) => {
  const [isToggled, setIsToggled] = useState(init);

  const toggle = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsToggled(false);
  }, []);

  return { isToggled, toggle, handleClose };
};

export default useToggle;
