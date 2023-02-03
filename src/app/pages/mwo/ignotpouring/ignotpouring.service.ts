import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class IgnotPouringService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Hold Number", rowspan: "1" },
      { heading: "Sample 1", rowspan: "1" },
      { heading: "Sample 2", rowspan: "1" },
      { heading: "Sample 3", rowspan: "1" },
      { heading: "Sample 4", rowspan: "1" },
      { heading: "Sample 5", rowspan: "1" },
      { heading: "Action", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "MW-01-1001" },
      { value: "Done" },
      { value: "Done" },
      { value: "Done" },
      { value: "Done" },
      { value: "-" },
      { isButton: true, innerText: "Moved to Ingot Pouring", success: true },
      { isForm: true },
      { showParentReport: false },
    ],
    [
      { value: "22/12/2022" },
      { value: "MW-01-1001" },
      { value: "Done" },
      { value: "-" },
      { value: "-" },
      { value: "-" },
      { value: "-" },
      { isButton: true, innerText: "Moved to Ingot Pouring", success: true },
      { isForm: true },
      { showParentReport: false },
    ],
    [
      { value: "22/12/2022" },
      { value: "MW-01-1001" },
      { value: "Done" },
      { value: "Done" },
      { value: "-" },
      { value: "-" },
      { value: "-" },
      { isButton: true, innerText: "Pending", success: false },
      { isForm: true },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getIgnotPouringReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }
}
