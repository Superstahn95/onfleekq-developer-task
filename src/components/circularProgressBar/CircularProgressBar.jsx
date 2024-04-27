import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { colors } from "../../utils/colors";
import "./circularProgressBar.css";
function CircularProgressBar() {
  const percentage = 66;
  return (
    <div style={{ width: 150, height: 150, marginTop: 50 }}>
      <CircularProgressbarWithChildren
        value={percentage}
        background={true}
        strokeWidth={2}
        styles={buildStyles({
          strokeLinecap: "round",
          pathColor: colors.primary,
          textColor: colors.primary,
          backgroundColor: "white",
        })}
      >
        <div className="progress--content">38%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default CircularProgressBar;
