import "./chart.css";
import WidgetWrapper from "../widgetWrapper/WidgetWrapper";
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import { colors } from "../../utils/colors";
function ChartComponent() {
  // open high low close
  const series = [
    {
      data: [
        { x: "Nov", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Dec", y: [4, 4, 2, 1] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Jan", y: [2, 4, 1, 4] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Feb", y: [4, 4, 1, 2] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Mar", y: [2, 3, 1, 2.8] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Apr", y: [2.8, 5, 1, 5] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "May", y: [5, 5, 0, 2] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Jun", y: [2, 4.5, 1, 3] },
        // Add more data points as needed
      ],
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Nov",
        "",
        "",
        "Dec",
        "",
        "",
        "Jan",
        "",
        "",
        "Feb",
        "",
        "",
        "Mar",
        "",
        "",
        "Apr",
        "",
        "",
        "May",
        "",
        "",
        "Jun",
      ],
      lines: {
        show: false,
      },
      //   labels: {
      //     showDuplicates: true,
      //   },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 5,
      stepSize: 1,
      labels: {
        formatter: (value) => `${value}k`,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: colors.primary, // Orange color for upward bars
          downward: colors.secondary, // Purple color for downward bars
        },
        // fix size of bar here
        wick: {
          useFillColor: false,
        },
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
  };
  return (
    <WidgetWrapper isShaded={true}>
      <div className="chart--header">
        <p className="chart--header--text">Statistics</p>
      </div>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={250}
      />
    </WidgetWrapper>
  );
}

export default ChartComponent;
