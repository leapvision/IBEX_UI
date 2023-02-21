import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  rejectionemailSentBarChart,
  monthlyEarningChart,
  lineBarChart,
  pieChart,
  rejectionpieChart,
  additionbreakupgaugeChart,
  yieldgaugeChart,
  additionbreakuplinewithDataChart,
  yieldlinewithDataChart,
  rejectionlineBarChart,
} from "./data";
import {
  ChartType,
  LineBarChartType,
  PieChartType,
  GaugeChartType,
  LineWithDataChartType,
} from "./admin.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EventService } from "../../../core/services/event.service";
import {
  NgbDate,
  NgbCalendar,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";

import { ConfigService } from "../../../core/services/config.service";
import { AdminService } from "./admin.service";

@Component({
  selector: "app-default",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  isVisible: string;

  emailSentBarChart: ChartType;
  rejectionemailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  lineBarChart: LineBarChartType;
  rejectionlineBarChart: LineBarChartType;
  additionbreakupgaugeChart: GaugeChartType;
  yieldgaugeChart: GaugeChartType;
  additionbreakuplinewithDataChart: LineWithDataChartType;
  yieldlinewithDataChart: LineWithDataChartType;
  pieChart: PieChartType;
  rejectionpieChart: PieChartType;
  transactions: Array<[]>;
  // statData: Array<[]>;

  hoveredDate: NgbDate;
  fromNGDate: NgbDate;
  toNGDate: NgbDate;

  @Input() fromDate: Date;
  @Input() toDate: Date;
  @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();

  @ViewChild("dp", { static: true }) datePicker: any;

  model: NgbDateStruct;
  date: { year: number; month: number };

  isActive: string;

  hidden: boolean;
  selected: any;

  statData = [
    {
      icon: "bx bx-copy-alt",
      title: "Total Scrap Weight",
      value: "900 Tons",
    },
    {
      icon: "bx bx-archive-in",
      title: "Total RM Weight",
      value: "873.9 Tons",
    },

    {
      icon: "bx bx-purchase-tag-alt",
      title: "Yield %",
      value: "97.1%",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Number of Melts",
      value: "15",
    },
  ];

  rejectionData = [
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Rejection Rate",
      value: "2.9%",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Rejection Quantity (Tons)",
      value: "26.1",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Rejection Ingots",
      value: "3250",
    },
  ];

  @ViewChild("content") content;
  constructor(
    private modalService: NgbModal,
    private configService: ConfigService,
    private eventService: EventService,
    private calendar: NgbCalendar,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    /**
     * horizontal-vertical layput set
     */
    const attribute = document.body.getAttribute("data-layout");

    this.isVisible = attribute;
    const vertical = document.getElementById("layout-vertical");
    if (vertical != null) {
      vertical.setAttribute("checked", "true");
    }
    if (attribute == "horizontal") {
      const horizontal = document.getElementById("layout-horizontal");
      if (horizontal != null) {
        horizontal.setAttribute("checked", "true");
        console.log(horizontal);
      }
    }

    /**
     * Fetches the data
     */
    this.fetchData();

    this.hidden = true;
  }

  currentStatusHeadingArray = this.adminService.getCurrentStatus().heading;
  currentStatusBodyArray = this.adminService.getCurrentStatus().body;

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.openModal();
    // }, 2000);
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.lineBarChart = lineBarChart;
    this.rejectionlineBarChart = rejectionlineBarChart;
    this.pieChart = pieChart;
    this.rejectionpieChart = rejectionpieChart;
    this.additionbreakupgaugeChart = additionbreakupgaugeChart;
    this.yieldgaugeChart = yieldgaugeChart;
    this.additionbreakuplinewithDataChart = additionbreakuplinewithDataChart;
    this.yieldlinewithDataChart = yieldlinewithDataChart;

    this.rejectionemailSentBarChart = rejectionemailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;

    this.isActive = "year";
    this.configService.getConfig().subscribe((data) => {
      this.transactions = data.transactions;
      // this.statData = data.statData;
    });
  }

  openModal() {
    this.modalService.open(this.content, { centered: true });
  }

  weeklyreport() {
    this.isActive = "week";
    this.emailSentBarChart.series = [
      {
        name: "Line 1",
        data: [44, 55, 41, 67, 22, 4, 10],
      },
      {
        name: "Line 2",
        data: [11, 17, 15, 15, 21, 14, 11],
      },
    ];
    this.emailSentBarChart.xaxis = {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    };

    this.statData = [
      {
        icon: "bx bx-copy-alt",
        title: "Total Ingots Weight",
        value: "100KG",
      },
      {
        icon: "bx bx-archive-in",
        title: "Total Final Heat Numbers",
        value: "50",
      },
      {
        icon: "bx bx-purchase-tag-alt",
        title: "Total Dispatched Weight",
        value: "400KG",
      },
    ];
  }

  monthlyreport() {
    this.isActive = "month";
    this.emailSentBarChart.series = [
      {
        name: "Line 1",
        data: [44, 55, 41, 67, 22],
      },
      {
        name: "Line 2",
        data: [13, 23, 20, 8, 13],
      },
    ];
    this.emailSentBarChart.xaxis = {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    };

    this.statData = [
      {
        icon: "bx bx-copy-alt",
        title: "Total Ingots Weight",
        value: "200KG",
      },
      {
        icon: "bx bx-archive-in",
        title: "Total Final Heat Numbers",
        value: "100",
      },
      {
        icon: "bx bx-purchase-tag-alt",
        title: "Total Dispatched Weight",
        value: "800KG",
      },
    ];
  }

  yearlyreport() {
    this.isActive = "year";
    this.emailSentBarChart.series = [
      {
        name: "Line 1",
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
      },
      {
        name: "Line 2",
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18],
      },
    ];
    this.emailSentBarChart.xaxis = {
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
    };

    this.statData = [
      {
        icon: "bx bx-copy-alt",
        title: "Total Ingots Weight",
        value: "400KG",
      },
      {
        icon: "bx bx-archive-in",
        title: "Total Final Heat Numbers",
        value: "200",
      },
      {
        icon: "bx bx-purchase-tag-alt",
        title: "Total Dispatched Weight",
        value: "1000KG",
      },
    ];
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.eventService.broadcast("changeLayout", layout);
  }

  /**
   * on date selected
   * @param date date object
   */
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = "";
    } else if (this.fromDate && !this.toDate && date.after(this.fromNGDate)) {
      this.toNGDate = date;
      this.toDate = new Date(date.year, date.month - 1, date.day);
      this.hidden = true;
      this.selected =
        this.fromDate.toLocaleDateString() +
        "-" +
        this.toDate.toLocaleDateString();
      this.dateRangeSelected.emit({
        fromDate: this.fromDate,
        toDate: this.toDate,
      });

      this.fromDate = null;
      this.toDate = null;
      this.fromNGDate = null;
      this.toNGDate = null;
    } else {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = "";
    }
  }
  /**
   * Is hovered over date
   * @param date date obj
   */
  isHovered(date: NgbDate) {
    return (
      this.fromNGDate &&
      !this.toNGDate &&
      this.hoveredDate &&
      date.after(this.fromNGDate) &&
      date.before(this.hoveredDate)
    );
  }

  /**
   * @param date date obj
   */
  isInside(date: NgbDate) {
    return date.after(this.fromNGDate) && date.before(this.toNGDate);
  }

  /**
   * @param date date obj
   */
  isRange(date: NgbDate) {
    return (
      date.equals(this.fromNGDate) ||
      date.equals(this.toNGDate) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  /**
   * Select the today
   */
  selectToday() {
    this.model = this.calendar.getToday();
  }
}
