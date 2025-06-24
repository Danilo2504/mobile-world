import { useState } from "react";

export const useToggle = (initialState) => {
   const [isVisible, setIsVisible] = useState(initialState);

   const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
   };

   const closeVisibility = () => {
      setIsVisible(false);
   }

   const openVisibility = () => {
      setIsVisible(true);
   }

  return { isVisible, toggleVisibility, closeVisibility, openVisibility};
};
