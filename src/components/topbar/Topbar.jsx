import DeskTopBar from "../deskTopBar/DeskTopBar";
import MobileTopBar from "../mobileTopBar/MobileTopBar";
import useScreenMode from "../../hooks/screenMode";

function Topbar() {
  const { isMobile } = useScreenMode();
  return isMobile ? <MobileTopBar /> : <DeskTopBar />;
}

export default Topbar;
