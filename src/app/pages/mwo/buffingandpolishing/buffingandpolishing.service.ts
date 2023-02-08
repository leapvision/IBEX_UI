import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BuffingAndPolishingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Total Ingots", colspan: "6" },
      { heading: "Status", colspan: "2" },
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
      { heading: "Buffing" },
      { heading: "Polishing" },
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
      { isStatusButton: true, innerText: "Complete", success: true },
      { isStatusButton: true, innerText: "Complete", success: true },
    ],
    [
      { value: "IBEX-MW-01-1002-221220" },
      { value: "75" },
      { value: "75" },
      { value: "70" },
      { value: "70" },
      { value: "5" },
      { value: "5" },
      { isStatusButton: true, innerText: "Complete", success: true },
      { isStatusButton: true, innerText: "Complete", success: true },
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
      { isStatusButton: true, innerText: "Pending", success: false },
    ],
  ];

  constructor() {}

  getBuffingAndPolishingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getBuffingAndPolishingForMeltNumber(meltNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
