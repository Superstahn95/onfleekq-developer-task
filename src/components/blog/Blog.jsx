import { FaStar, FaPlayCircle, FaClock } from "react-icons/fa";
import "./blog.css";
import WidgetWrapper from "../widgetWrapper/WidgetWrapper";
import { colors } from "../../utils/colors";
import { IoChevronForwardOutline } from "react-icons/io5";

const statistics = [
  { text: "Video", icon: <FaPlayCircle color={colors.primary} size={20} /> },
  { text: "15 mins", icon: <FaClock color={"#00C3F8"} size={20} /> },
  { text: "12 likes", icon: <FaStar color={colors.secondary} size={20} /> },
];
function Blog() {
  return (
    <WidgetWrapper>
      <div className="blog">
        <div className="blog--author--container">
          <div className="author--image--container">{/* avatar here */}</div>
          <div className="author--details">
            <p className="author--name">Lily Donovan</p>
            <p className="author--post">Business Trainer</p>
          </div>
        </div>
        <div className="blog--title--container">
          <p className="blog--title">
            How to properly manage your <br /> personal budget?
          </p>
        </div>
        <div className="blog--statistics">
          {statistics.map((stat) => (
            <div key={stat.text} className="blog--stat">
              {stat.icon}
              <span className="blog--stat--text">{stat.text}</span>
            </div>
          ))}
        </div>
        <div className="blog--time--container">
          <span>5 days ago</span>
          <button
            style={{ backgroundColor: colors.primary }}
            className="blog--button"
          >
            <span>Connect</span>
            <IoChevronForwardOutline color={colors.white} size={20} />
          </button>
        </div>
      </div>
    </WidgetWrapper>
  );
}

export default Blog;
