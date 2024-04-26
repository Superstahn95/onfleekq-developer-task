/* eslint-disable react/prop-types */
import "./widgetWrapper.css";
function WidgetWrapper({ children, isShaded }) {
  return (
    <div className={isShaded ? "widget--shaded" : "widget"}>{children}</div>
  );
}

export default WidgetWrapper;
