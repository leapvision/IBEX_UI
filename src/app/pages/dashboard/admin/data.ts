import { ChartType } from "./admin.model";
import { EChartType } from "./admin.model";

const lineBarChart: EChartType = {
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
    data: ["Scrap Weight", "RM Weight", "Yield"],
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
      name: "Yield %",
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
      name: "Yield",
      type: "line",
      yAxisIndex: 1,
      data: [
        95.95, 95.84, 95.79, 95.61, 95.32, 95.0, 95.84, 95.78, 95.14, 95.89,
        95.12, 95.63,
      ],
    },
  ],
};

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
      name: "Line 1",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
    },
    {
      name: "Line 2",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
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
  colors: ["#556ee6", "#f1b44c"],
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
};
