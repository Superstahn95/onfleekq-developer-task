import "./mobileTopBar.css";
import { IoMdNotifications } from "react-icons/io";
import avatar from "../../assets/profile-avatar.png";
import logo from "../../assets/mobile-logo.png";
import { colors } from "../../utils/colors";
function MobileTopBar() {
  return (
    <div className="mobile--topbar">
      <div className="mobile--logo--container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="mobile--avatar--container">
        <div className="topbar--notification--container">
          <IoMdNotifications
            size={25}
            className="notification"
            color={colors.primaryShaded}
          />
          <div className="red--dot"></div>
        </div>
        <div className="avatar--container">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </div>
  );
}

export default MobileTopBar;
