/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const ScreenMode = createContext();

export default function ScreenProvider({ children }) {
  const [isMobile, setIsMobile] = useState(() => {
    return window.matchMedia("(max-width: 700px)").matches;
  });
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 700px)").matches);
    };
    checkMobile();
    const resizeListener = () => {
      checkMobile();
    };
    window.addEventListener("resize", resizeListener);
    // handling side effects
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return (
    <ScreenMode.Provider value={{ isMobile }}>{children}</ScreenMode.Provider>
  );
}
