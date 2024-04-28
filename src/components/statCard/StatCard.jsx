/* eslint-disable react/prop-types */
import "./statCard.css";
import WidgetWrapper from "../widgetWrapper/WidgetWrapper";
function StatCard({ stat }) {
  return (
    <WidgetWrapper isShaded={stat.category === "orders"}>
      <div className={stat.category === "orders" ? "card--active" : "card"}>
        <div className="card--graph">
          <img src={stat.image} alt="chart" className="card--chart--image" />
        </div>
        <div className="card--stat">
          <p className="card--text">{stat.category}</p>
          <p className="card--number">{stat.number}</p>
        </div>
      </div>
    </WidgetWrapper>
  );
}

export default StatCard;
