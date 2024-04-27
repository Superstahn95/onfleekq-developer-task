import "./analyticsView.css";
import DetailsSummary from "../detailsSummary/DetailsSummary";
import Payment from "../payment/Payment";
import ChartComponent from "../chart/Chart";
import Blog from "../blog/Blog";
import TimeChart from "../timeChart/TimeChart";
function AnalyticsView() {
  return (
    <div className="analytics">
      <div className="analytics--firstsection">
        <DetailsSummary />
        <div style={{ marginBlock: 30 }}>
          <ChartComponent />
        </div>
        <div className="time--blog--container">
          <Blog />
          <TimeChart />
        </div>
      </div>
      <div className="anlaytics--secondsection">
        <Payment />
      </div>
    </div>
  );
}

export default AnalyticsView;
