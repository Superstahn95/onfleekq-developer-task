import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import "./deskTopBar.css";
import { colors } from "../../utils/colors";
function DeskTopBar() {
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
        <IoMdNotifications
          size={25}
          className="notification"
          color={colors.primaryShaded}
        />
      </div>
    </div>
  );
}

export default DeskTopBar;
