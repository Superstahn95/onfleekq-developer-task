import "../home/home.css";
import Topbar from "../../components/topbar/Topbar";
import AnalyticsView from "../../components/analytics/AnalyticsView";
function Message() {
  return (
    <div className="container">
      <Topbar />
      <AnalyticsView />
    </div>
  );
}

export default Message;
