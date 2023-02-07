import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PrintingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Total Ingots", colspan: "6" },
      { heading: "Status", colspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "Total Ingots" },
      { heading: "Total Ingots Quantity" },
      { heading: "Ok Ingots" },
      { heading: "Ok Ingots Quantity" },
      { heading: "Not Ok Ingots" },
      { heading: "Not Ok Ingots Quantity" },
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "IBEX-MW-01-1001-22122022" },
      { value: "75" },
      { value: "75" },
      { value: "70" },
      { value: "70" },
      { value: "5" },
      { value: "5" },
      { isStatusButton: true, innerText: "Printing Complete", success: true },
      { showParentReport: false },
    ],
    [
      { value: "IBEX-MW-01-1002-221220" },
      { value: "75" },
      { value: "75" },
      { value: "70" },
      { value: "70" },
      { value: "5" },
      { value: "5" },
      { isStatusButton: true, innerText: "Printing Complete", success: true },
      { showParentReport: false },
    ],
    [
      { value: "IBEX-MW-01-1003-221210" },
      { value: "75" },
      { value: "75" },
      { value: "75" },
      { value: "75" },
      { value: "0" },
      { value: "0" },
      { isStatusButton: true, innerText: "Pending", success: false },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getPrintingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getPrintingForHeatNumber(heatNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
