/* eslint-disable react/prop-types */
import "./screenController.css";
import { BsBarChartFill, BsFillCreditCard2FrontFill } from "react-icons/bs";

function ScreenController({ activeComponent, setActiveComponent }) {
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className="controller--container">
      <div className="controller">
        <button
          onClick={() => handleComponentChange("chart")}
          className={
            activeComponent === "chart"
              ? "controller--button--active"
              : "controller--button"
          }
        >
          <BsBarChartFill
            size={20}
            color={activeComponent === "chart" ? "#ffffff" : "#BBBED9"}
          />
        </button>
        <button
          onClick={() => handleComponentChange("transactions")}
          className={
            activeComponent === "transactions"
              ? "controller--button--active"
              : "controller--button"
          }
        >
          <BsFillCreditCard2FrontFill
            size={20}
            color={activeComponent === "transactions" ? "#ffffff" : "#BBBED9"}
          />
        </button>
      </div>
    </div>
  );
}

export default ScreenController;
