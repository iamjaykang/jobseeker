import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  // Set the initial screen width to the window's current innerWidth
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // when the window is resized, update the screenWidth state with the new innerWidth
    const handleResize = () => setScreenWidth(window.innerWidth);

    // listen for a window resize event
    window.addEventListener("resize", handleResize);
    return () => {
      // remove the event listener when the component using this hook unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenWidth;
};
