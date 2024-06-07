"use client";

import { useEffect, useState } from "react";

export const useScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollFun = () => {
      if (window.scrollY >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollFun);

    return () => window.removeEventListener("scroll", scrollFun);
  }, []);
  return {
    isScrolled,
  };
};
