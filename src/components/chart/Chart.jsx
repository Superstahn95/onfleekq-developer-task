import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./chart.css";
import WidgetWrapper from "../widgetWrapper/WidgetWrapper";
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import { colors } from "../../utils/colors";
function ChartComponent() {
  const [range, setRange] = useState("Year");
  const [showDropDown, setShowDropDown] = useState(false);
  const series = [
    {
      data: [
        { x: "jan", y: [2, 4, 1, 4.5] },
        { x: "feb", y: [4, 4, 2, 1] },
        { x: "mar", y: [2, 4, 1, 4] },
        { x: "apr", y: [4, 4, 1, 2] },
        { x: "may", y: [2, 3, 1, 2.8] },
        { x: "jun", y: [2.8, 5, 1, 5] },
        { x: "jul", y: [5, 5, 0, 2] },
        { x: "aug", y: [2, 4, 1, 4.5] },
        { x: "sep", y: [2, 4, 1, 4] },
        { x: "oct", y: [2, 4.5, 1, 3] },
        { x: "nov", y: [2, 4.5, 1, 3] },
        { x: "dec", y: [2, 4.5, 1, 3] },
        // Add more data points as needed
      ],
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: "100%",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
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
        // wick: {
        //   useFillColor: false,
        // },
        barWidth: 2,
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
        <div
          className="chart--selection"
          onClick={() => setShowDropDown((prev) => !prev)}
        >
          <span className="chart--selection--text">{range}</span>
          <div className="selection--icon-wrapper">
            <FaAngleDown size={15} />
          </div>
          {showDropDown && (
            <div className="selection--dropdown">
              <div className="selection" onClick={() => setRange("Month")}>
                Month
              </div>
              <div className="selection" onClick={() => setRange("Year")}>
                Year
              </div>
            </div>
          )}
        </div>
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
