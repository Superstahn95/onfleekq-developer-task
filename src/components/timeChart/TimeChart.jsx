import "./timeChart.css";
import Chart from "react-apexcharts";
import WidgetWrapper from "../widgetWrapper/WidgetWrapper";
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
      <Chart options={options} series={series} type="line" height={100} />
    </WidgetWrapper>
  );
}

export default TimeChart;
