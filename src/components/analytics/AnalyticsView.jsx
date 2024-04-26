import "./analyticsView.css";
import DetailsSummary from "../detailsSummary/DetailsSummary";
import Payment from "../payment/Payment";
function AnalyticsView() {
  return (
    <div className="analytics">
      <div className="analytics--firstsection">
        <DetailsSummary />
      </div>
      <div className="anlaytics--secondsection">
        <Payment />
      </div>
    </div>
  );
}

export default AnalyticsView;
