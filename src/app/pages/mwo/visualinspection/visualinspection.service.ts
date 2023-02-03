import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VisualInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Status", colspan: "6" },
      { heading: "Remarks", colspan: "2" },
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
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "IBEX-MW-01-1001-221222" },
      { value: "75" },
      { value: "75" },
      { value: "70" },
      { value: "70" },
      { value: "5" },
      { value: "5" },
      { isForm: true },
      { showParentReport: false },
    ],
    [
      { value: "IBEX-MW-01-1002-221220" },
      { value: "75" },
      { value: "75" },
      { value: "75" },
      { value: "75" },
      { value: "0" },
      { value: "0" },
      { isForm: true },
      { showParentReport: false },
    ],
    [
      { value: "IBEX-MW-02-1003-221210" },
      { value: "75" },
      { value: "75" },
      { value: "70" },
      { value: "70" },
      { value: "5" },
      { value: "5" },
      { isForm: true },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getVisualInspectionReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }
}
