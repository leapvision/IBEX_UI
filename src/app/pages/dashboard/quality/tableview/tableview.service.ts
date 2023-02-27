import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TableViewService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Alloy Name", rowspan: "1" },
      { heading: "Line", rowspan: "1" },
      { heading: "Shift", rowspan: "1" },
      { heading: "Total Scrap Weight", rowspan: "1" },
      { heading: "RM Weight", rowspan: "1" },
      { heading: "Yield %", rowspan: "1" },
      { heading: "No of Melts", rowspan: "1" },
      { heading: "Scrap Details", colspan: "4" },
      { heading: "Ibex Runners & Returns", rowspan: "1" },
      { heading: "Rejection Ingots", colspan: "3" },
      { heading: "Others", rowspan: "1" },
      { heading: "Flux", colspan: "3" },
      { heading: "Addition Details", colspan: "5" },
      { heading: "Remarks", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "CMR" },
      { heading: "Steel Line India" },
      { heading: "Sunland" },
      { heading: "Welbow" },
      { heading: "" },
      { heading: "AM50A" },
      { heading: "AZ91D" },
      { heading: "MG9010" },
      { heading: "" },
      { heading: "Flux 0" },
      { heading: "Flux 5" },
      { heading: "Flux 12" },
      { heading: "Be (Grams)" },
      { heading: "Pure Alu (KG)" },
      { heading: "Zinc (KG)" },
      { heading: "Al Mn (KG)" },
      { heading: "Pure Mg (KG)" },
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "1" },
      { value: "1/02/2023" },
      { value: "AM50A" },
      { value: "1" },
      { value: "1" },
      { value: "8040" },
      { value: "7798" },
      { value: "97%" },
      { value: "14" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "6906" },
      { value: "1134" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "140" },
      { value: "0" },
      { value: "70" },
      { value: "0.7" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "-" },
    ],
    [
      { value: "2" },
      { value: "1/02/2023" },
      { value: "AZ91D" },
      { value: "2" },
      { value: "2" },
      { value: "8040" },
      { value: "7798" },
      { value: "97%" },
      { value: "14" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "6906" },
      { value: "1134" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "140" },
      { value: "0" },
      { value: "70" },
      { value: "0.7" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "-" },
    ],
    [
      { value: "3" },
      { value: "1/02/2023" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "8040" },
      { value: "7798" },
      { value: "97%" },
      { value: "14" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "6906" },
      { value: "1134" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "140" },
      { value: "0" },
      { value: "70" },
      { value: "0.7" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "-" },
    ],
  ];

  dayHeadingArray = [
    [
      { heading: "Scrap Melting", colspan: "24" },
      { heading: "Output Production", colspan: "5" },
      { heading: "" },
    ],
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Alloy Name", rowspan: "1" },
      { heading: "Line", rowspan: "1" },
      { heading: "Shift", rowspan: "1" },
      { heading: "Time", colspan: "2" },
      { heading: "Total Scrap Weight", rowspan: "1" },
      { heading: "Scrap Details", colspan: "4" },
      { heading: "Ibex Runners & Returns", rowspan: "1" },
      { heading: "Rejection Ingots", colspan: "3" },
      { heading: "Others", rowspan: "1" },
      { heading: "Flux", colspan: "3" },
      { heading: "Addition Details", colspan: "5" },
      { heading: "Hold No at MWO", rowspan: "1" },
      { heading: "Output Metal Weight", rowspan: "1" },
      { heading: "No of Ingots", rowspan: "1" },
      { heading: "Slag", rowspan: "1" },
      { heading: "Prod Team", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Start" },
      { heading: "End" },
      { heading: "" },
      { heading: "CMR" },
      { heading: "Steel Line India" },
      { heading: "Sunland" },
      { heading: "Welbow" },
      { heading: "" },
      { heading: "AM50A" },
      { heading: "AZ91D" },
      { heading: "MG9010" },
      { heading: "" },
      { heading: "Flux 0" },
      { heading: "Flux 5" },
      { heading: "Flux 12" },
      { heading: "Be (Grams)" },
      { heading: "Pure Alu (KG)" },
      { heading: "Zinc (KG)" },
      { heading: "Al Mn (KG)" },
      { heading: "Pure Mg (KG)" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
    ],
  ];
  dayBodyArray = [
    [
      { value: "1" },
      { value: "AM50A" },
      { value: "1" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-01-1001" },
      { value: "537" },
      { value: "70" },
      { value: "16" },
      { isButton: true, innerText: "Supervisor 1" },
      { value: "-" },
    ],
    [
      { value: "2" },
      { value: "AZ91D" },
      { value: "1" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-01-1002" },
      { value: "539" },
      { value: "70" },
      { value: "15" },
      { isButton: true, innerText: "Supervisor 2" },
      { value: "-" },
    ],
    [
      { value: "3" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "4" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "5" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "6" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "7" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "8" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "9" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "10" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "11" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "12" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "13" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "14" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "15" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "16" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "17" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "18" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "19" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
    [
      { value: "20" },
      { value: "MG9010" },
      { value: "2" },
      { value: "3" },
      { value: "10:15" },
      { value: "11:35" },
      { value: "581" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "517" },
      { value: "49" },
      { value: "0" },
      { value: "15" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "MW-02-1003" },
      { value: "539" },
      { value: "70" },
      { value: "17" },
      { isButton: true, innerText: "Supervisor 3" },
      { value: "-" },
    ],
  ];

  constructor() {}

  getTableView() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getTableViewForDay() {
    return {
      heading: this.dayHeadingArray,
      body: this.dayBodyArray,
    };
  }
}