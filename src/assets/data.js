import chart1 from "./chart-1.png";
import chart2 from "./chart-2.png";
import chart3 from "./chart-3.png";
import taxi from "./move.png";
import netflix from "./netflix.png";
import bag from "./bag.png";

export const analytics = [
  { category: "visitors", number: 10320, image: chart3 },
  { category: "customers", number: 4628, image: chart1 },
  { category: "orders", number: 2980, image: chart2 },
];

export const transactions = [
  { type: "taxi", time: "1:21pm", amount: "$9,20", image: taxi },
  { type: "shopping", time: "11:15pm", amount: "$142,00", image: bag },
  { type: "netflix", time: "Jan 10, 2020", amount: "$24,99", image: netflix },
];
