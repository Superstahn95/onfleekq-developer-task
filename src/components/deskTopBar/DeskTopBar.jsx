import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import "./deskTopBar.css";
import { colors } from "../../utils/colors";
import profileAvatar from "../../assets/profile-avatar.png";
import { useState } from "react";
function DeskTopBar() {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="topbar">
      <div className="topbar--search">
        <div className="topbar--searchicon--container">
          <IoSearch size={20} color={colors.primary} className="searchicon" />
        </div>
        <input type="text" placeholder="Search" className="topbar--textfield" />
      </div>
      <div className="topbar--nav--container">
        <ul className="topbar--nav">
          <li className="topbar--links">Feedback</li>
          <li className="topbar--links">Contacts</li>
          <li className="topbar--links">Help</li>
        </ul>
      </div>

      <div className="topbar--notification">
        <div className="topbar--notification--container">
          <IoMdNotifications
            size={30}
            className="notification"
            color={colors.primaryShaded}
          />
          <div className="red--dot"></div>
        </div>
        <div className="avatar--container">
          <img
            src={profileAvatar}
            alt="avatar"
            className="profile-avatar"
            onClick={() => setShowDropDown((prev) => !prev)}
          />
          {showDropDown && (
            <div className="profile--dropdown">
              <p> Profile</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeskTopBar;
