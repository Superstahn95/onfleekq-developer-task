import { NavLink } from "react-router-dom";
import { IoWallet } from "react-icons/io5";
import { FaMessage, FaHouse } from "react-icons/fa6";
import { AiFillPieChart } from "react-icons/ai";
import "./sidebar.css";

const navlinksArray = [
  { icon: <FaHouse size={25} />, path: "/" },
  {
    icon: <AiFillPieChart size={25} />,
    path: "/stat",
  },
  {
    icon: <FaMessage size={25} />,
    path: "/messages",
  },
  {
    icon: <IoWallet size={25} />,
    path: "/wallet",
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="text">Logo</div>
      <div className="navlinks--container">
        {navlinksArray.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
            className={({ isActive }) =>
              isActive ? "navlinks-active" : "navlinks"
            }
          >
            {link.icon}{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
