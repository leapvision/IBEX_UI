import {
  ChartType,
  LineBarChartType,
  PieChartType,
  GaugeChartType,
  LineWithDataChartType,
} from "./admin.model";

const lineBarChart: LineBarChartType = {
  // Setup grid
  grid: {
    zlevel: 0,
    x: 80,
    x2: 50,
    y: 30,
    y2: 30,
    borderWidth: 0,
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "rgba(0,0,0,0)",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    orient: "center",
    left: 0,
    top: 50,
    feature: {
      dataView: { readOnly: false, title: "Data View" },
      magicType: {
        type: ["line", "bar"],
        title: { line: "For line chart", bar: "For bar chart" },
      },
      restore: { title: "restore" },
      saveAsImage: { title: "Download Image" },
    },
  },
  color: ["#34c38f", "#556ee6", "#f46a6a"],
  legend: {
    data: ["Scrap Weight", "RM Weight", "Yield (%)"],
    textStyle: { color: "#8791af" },
  },
  xAxis: [
    {
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisPointer: {
        type: "shadow",
      },
      axisLine: {
        lineStyle: {
          color: "#8791af",
        },
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Quantity",
      min: 0,
      max: 100,
      interval: 20,
      axisLine: {
        lineStyle: {
          color: "#8791af",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(166, 176, 207, 0.1)",
        },
      },
      axisLabel: {
        formatter: "{value} tons",
      },
    },
    {
      type: "value",
      name: "Yield",
      min: 0,
      max: 100,
      interval: 10,
      axisLine: {
        lineStyle: {
          color: "#8791af",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(166, 176, 207, 0.1)",
        },
      },
      axisLabel: {
        formatter: "{value} %",
      },
    },
  ],
  series: [
    {
      name: "Scrap Weight",
      type: "bar",
      data: [
        74.24, 78.25, 73.28, 75.55, 76.25, 78.33, 80.12, 70.15, 78.22, 80.14,
        71.14, 72.32,
      ],
    },
    {
      name: "RM Weight",
      type: "bar",
      data: [
        71.24, 75.0, 70.2, 72.15, 72.09, 75.12, 77.58, 67.12, 75.0, 77.34,
        68.13, 69.78,
      ],
    },
    {
      name: "Yield (%)",
      type: "line",
      yAxisIndex: 1,
      data: [
        95.95, 95.84, 95.79, 95.61, 95.32, 95.0, 95.84, 95.78, 95.14, 95.89,
        95.12, 95.63,
      ],
    },
  ],
};

const pieChart: PieChartType = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "horizontal",
    left: "left",
    data: [
      "Scrap",
      "Ibex Runners & Returns",
      "Rejected Ingots",
      "Flux",
      "Addition Details",
    ],
    textStyle: { color: "#8791af" },
  },
  series: [
    {
      name: "Quantity(Tons)",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 798.6, name: "Scrap" },
        { value: 77.01, name: "Ibex Runners & Returns" },
        { value: 23.28, name: "Rejected Ingots" },
        { value: 23.25, name: "Flux" },
        { value: 0.069, name: "Addition Details" },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
  color: ["#556ee6", "#f1b44c", "#f46a6a", "#50a5f1", "#34c38f"],
};

// Scrap
// const emailSentBarChart: ChartType = {
//   chart: {
//     height: 340,
//     type: "bar",
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "15%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "CMR",
//       data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
//     },
//     {
//       name: "Steel Line India",
//       data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
//     },
//     {
//       name: "Sunland",
//       data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
//     },
//     {
//       name: "Welbow",
//       data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
//     },
//   ],
//   xaxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   },
//   colors: ["#556ee6", "#f1b44c", "#64bc43", "#FF0000"],
//   legend: {
//     position: "bottom",
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// Ibex Runners & Returns
// const emailSentBarChart: ChartType = {
//   chart: {
//     height: 340,
//     type: "bar",
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "15%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "Ibex Runners & Returns",
//       data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
//     },
//   ],
//   xaxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   },
//   colors: ["#FFC653"],
//   legend: {
//     position: "bottom",
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// Rejection Ingots
// const emailSentBarChart: ChartType = {
//   chart: {
//     height: 340,
//     type: "bar",
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "15%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "AM50A",
//       data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
//     },
//     {
//       name: "AZ91D",
//       data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
//     },
//     {
//       name: "MG9010",
//       data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
//     },
//   ],
//   xaxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   },
//   colors: ["#556ee6", "#f1b44c", "#64bc43"],
//   legend: {
//     position: "bottom",
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// Flux
// const emailSentBarChart: ChartType = {
//   chart: {
//     height: 340,
//     type: "bar",
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "15%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "Flux 0",
//       data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
//     },
//     {
//       name: "Flux 5",
//       data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
//     },
//     {
//       name: "Flux 12",
//       data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
//     },
//   ],
//   xaxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   },
//   colors: ["#556ee6", "#f1b44c", "#64bc43"],
//   legend: {
//     position: "bottom",
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// Addition Details
const emailSentBarChart: ChartType = {
  chart: {
    height: 340,
    type: "bar",
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "15%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Total Addition",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  colors: ["#556ee6"],
  legend: {
    position: "bottom",
  },
  fill: {
    opacity: 1,
  },
};

const monthlyEarningChart: ChartType = {
  chart: {
    height: 200,
    type: "radialBar",
    offsetY: -10,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "13px",
          color: undefined,
          offsetY: 60,
        },
        value: {
          offsetY: 22,
          fontSize: "16px",
          color: undefined,
          formatter: (val) => {
            return val + "%";
          },
        },
      },
    },
  },
  colors: ["#556ee6"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: {
    dashArray: 4,
  },
  series: [82],
  labels: ["Ingots"],
};

// Addition Breakup GaugeChart
const additionbreakupgaugeChart: GaugeChartType = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  toolbox: {
    feature: {
      // restore: { title: "Refresh" },
      saveAsImage: { title: "Download Image" },
    },
  },
  series: [
    {
      name: "Additives Gauge",
      type: "gauge",
      min: 0,
      max: 1000,
      detail: { formatter: "{value}" },
      axisLine: {
        lineStyle: {
          color: [
            [0.2, "#34c38f"],
            [0.8, "#556ee6"],
            [1, "#f46a6a"],
          ],
          width: 15,
        },
      },
      data: [{ value: 630, name: "Quantity (KG)" }],
    },
  ],
};

// Yield Analysis GaugeChart
const yieldgaugeChart: GaugeChartType = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  toolbox: {
    feature: {
      // restore: { title: "Refresh" },
      saveAsImage: { title: "Download Image" },
    },
  },
  series: [
    {
      name: "Yield Analysis Gauge",
      type: "gauge",
      min: 0,
      max: 100,
      detail: { formatter: "{value}%" },
      axisLine: {
        lineStyle: {
          color: [
            [0.2, "#f46a6a"],
            [0.8, "#f1b44c"],
            [1, "#34c38f"],
          ],
          width: 15,
        },
      },
      data: [{ value: 88.12, name: "Yield %" }],
    },
  ],
};

// Addition Breakup LineWithDataChart
const additionbreakuplinewithDataChart: LineWithDataChartType = {
  chart: {
    height: 380,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#556ee6", "#34c38f"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    width: [3, 3],
    curve: "straight",
  },
  series: [
    {
      name: "Quantity (KG)",
      data: [26, 24, 32, 36, 33, 31, 33, 32, 36, 33, 31, 33],
    },
  ],

  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f1f1",
  },
  markers: {
    style: "inverted",
    size: 6,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    title: {
      text: "Month",
    },
  },
  yaxis: {
    title: {
      text: "Quantity (KG)",
    },
    min: 0,
    max: 50,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

// Yield Analysis LineWithDataChart
const yieldlinewithDataChart: LineWithDataChartType = {
  chart: {
    height: 380,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#CF5A5A", "#556ee6"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [3, 3],
    curve: "straight",
  },
  series: [
    {
      name: "Avg Yield",
      data: [82, 72, 78, 86, 95, 86, 79, 69, 89, 97, 71, 81],
    },
    {
      name: "CMR",
      data: [85, 86, 78, 96, 75, 96, 89, 79, 99, 97, 91, 81],
    },
    // {
    //   name: "Sunland",
    //   data: [26, 24, 32, 36, 33, 31, 33, 32, 36, 33, 31, 33],
    // },
    // {
    //   name: "Welbow",
    //   data: [26, 24, 32, 36, 33, 31, 33, 32, 36, 33, 31, 33],
    // },
  ],

  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
    borderColor: "#f1f1f1",
  },
  markers: {
    style: "inverted",
    size: 6,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    title: {
      text: "Month",
    },
  },
  yaxis: {
    title: {
      text: "Quantity (KG)",
    },
    min: 0,
    max: 100,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

const transactions = [
  {
    id: "#SK2540",
    name: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    status: "Paid",
    payment: ["fa-cc-mastercard", "Mastercard"],
    index: 1,
  },
  {
    id: "#SK2541",
    name: "Jamal Burnett",
    date: "07 Oct, 2019",
    total: "$380",
    status: "Chargeback",
    payment: ["fa-cc-visa", "Visa"],
    index: 2,
  },
  {
    id: "#SK2542",
    name: "Juan Mitchell",
    date: "06 Oct, 2019",
    total: "$384",
    status: "Paid",
    payment: ["fab fa-cc-paypal", "Paypal"],
    index: 3,
  },
  {
    id: "#SK2543",
    name: "Barry Dick",
    date: "05 Oct, 2019",
    total: "$412",
    status: "Paid",
    payment: ["fa-cc-mastercard", "Mastercard"],
    index: 4,
  },
  {
    id: "#SK2544",
    name: "Ronald Taylor",
    date: "04 Oct, 2019",
    total: "$404",
    status: "Refund",
    payment: ["fa-cc-visa", "Visa"],
    index: 5,
  },
  {
    id: "#SK2545",
    name: "Jacob Hunter",
    date: "04 Oct, 2019",
    total: "$392",
    status: "Paid",
    payment: ["fab fa-cc-paypal", "Paypal"],
    index: 6,
  },
];

const statData = [
  {
    icon: "bx bx-copy-alt",
    title: "Orders",
    value: "1,235",
  },
  {
    icon: "bx bx-archive-in",
    title: "Revenue",
    value: "$35, 723",
  },
  {
    icon: "bx bx-purchase-tag-alt",
    title: "Average Price",
    value: "$16.2",
  },
];

export {
  emailSentBarChart,
  monthlyEarningChart,
  transactions,
  statData,
  lineBarChart,
  pieChart,
  additionbreakupgaugeChart,
  yieldgaugeChart,
  additionbreakuplinewithDataChart,
  yieldlinewithDataChart,
};
