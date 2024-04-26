import { useContext } from "react";
import { ScreenMode } from "../context/screenMode";

const useScreenMode = () => {
  const context = useContext(ScreenMode);
  if (!context) {
    throw new Error("useScreenMode must be used within a ScreenProvider");
  }
  return context;
};

export default useScreenMode;
