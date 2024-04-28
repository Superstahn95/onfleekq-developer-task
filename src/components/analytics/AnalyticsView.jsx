import { useState } from "react";
import "./analyticsView.css";
import DetailsSummary from "../detailsSummary/DetailsSummary";
import Payment from "../payment/Payment";
import ChartComponent from "../chart/Chart";
import Blog from "../blog/Blog";
import TimeChart from "../timeChart/TimeChart";
import useScreenMode from "../../hooks/screenMode";
import ScreenController from "../screenController/ScreenController";

function AnalyticsView() {
  const { isMobile } = useScreenMode();
  const [activeComponent, setActiveComponent] = useState("chart");
  return (
    <>
      {isMobile && (
        <ScreenController
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      )}
      <div className="analytics">
        <div
          className={`analytics--firstsection ${
            activeComponent === "chart" ? "active" : ""
          }`}
        >
          <DetailsSummary />
          <div style={{ marginBlock: 30 }}>
            <ChartComponent />
          </div>
          <div className="time--blog--container">
            <TimeChart />
            <Blog />
          </div>
        </div>
        {!isMobile && (
          <div
            className={`analytics--secondsection ${
              activeComponent === "transactions" ? "active" : ""
            }`}
          >
            <Payment />
          </div>
        )}
      </div>
    </>
  );
}

export default AnalyticsView;
