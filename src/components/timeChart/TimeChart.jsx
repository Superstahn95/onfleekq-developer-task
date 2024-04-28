import "./timeChart.css";
import Chart from "react-apexcharts";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import WidgetWrapper from "../widgetWrapper/WidgetWrapper";
import { timeData } from "../../assets/data";
import { colors } from "../../utils/colors";
function TimeChart() {
  const series = [
    {
      data: [
        { x: "Sun", y: 20 },
        { x: "Mon", y: 30 },
        { x: "Tue", y: 28 },
        { x: "Wed", y: 40 },
        { x: "Thu", y: 38 },
        { x: "Fri", y: 60 },
      ],
    },
  ];
  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      type: "category",
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      stepSize: 10,
    },
    grid: {
      show: false,
    },
  };
  return (
    <WidgetWrapper>
      <div>TimeChart</div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          // className="line--chart"
          // width={400}
          // height={200}
          data={timeData}
        >
          <Line type="monotone" dataKey="time" stroke={colors.secondary} />
          <XAxis dataKey="name" />
          <Area
            type="monotone"
            dataKey="number"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </WidgetWrapper>
  );
}

export default TimeChart;
