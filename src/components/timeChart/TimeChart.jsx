import "./timeChart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import WidgetWrapper from "../widgetWrapper/WidgetWrapper";
import { timeData } from "../../assets/data";
import { colors } from "../../utils/colors";
function TimeChart() {
  return (
    <WidgetWrapper>
      <div className="time--text">Spent Time</div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={timeData}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={{ strokeWidth: 0 }}
          />
          <YAxis tick={false} axisLine={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="number"
            fill="#F5F5FC"
            stroke="#F5F5FC"
          />
          <Area
            type="monotone"
            dataKey="time"
            fill={colors.white}
            stroke={colors.secondary}
          />
        </AreaChart>
      </ResponsiveContainer>
    </WidgetWrapper>
  );
}

export default TimeChart;
