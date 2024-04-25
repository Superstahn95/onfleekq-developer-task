import { LiaWalletSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FiPieChart } from "react-icons/fi";

const navlinksArray = [
  { icon: <IoMdHome size={30} />, path: "home" },
  { icon: <FiPieChart size={30} />, path: "stat" },
  { icon: <FaMessage size={30} />, path: "messages" },
  { icon: <LiaWalletSolid size={30} />, path: "wallet" },
];
function Sidebar() {
  return (
    <div>
      <div>Logo</div>
      <div className="navlinks--container">
        {navlinksArray.map((link) => (
          <div key={link.path} className="navlinks">
            {link.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
