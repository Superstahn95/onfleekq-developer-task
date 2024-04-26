import { analytics } from "../../assets/data";
import "./detailsSummary.css";
import StatCard from "../statCard/StatCard";
function DetailsSummary() {
  return (
    <div className="details--summary">
      {analytics.map((analytic) => (
        <StatCard key={analytic.category} stat={analytic} />
      ))}
    </div>
  );
}

export default DetailsSummary;
