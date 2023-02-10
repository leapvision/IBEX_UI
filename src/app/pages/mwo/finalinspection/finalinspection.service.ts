import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FinalInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Status", colspan: "6" },
      { heading: "Remarks", colspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "Total Printed Ingots" },
      { heading: "Total Printed Ingots Quantity (KG)" },
      { heading: "Ok Printed Ingots" },
      { heading: "Ok Printed Ingots Quantity (KG)" },
      { heading: "Not Ok Printed Ingots" },
      { heading: "Not Ok Printed Ingots Quantity (KG)" },
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "IBEX-MW-01-1001-221222" },
      { value: "70" },
      { value: "70" },
      { value: "70" },
      { value: "70" },
      { value: "0" },
      { value: "0" },
      { isForm: true },
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
    ],
    [
      { value: "IBEX-MW-02-1003-221210" },
      { value: "70" },
      { value: "70" },
      { value: "70" },
      { value: "70" },
      { value: "0" },
      { value: "0" },
      { isForm: true },
    ],
  ];

  constructor() {}

  getFinalInspectionReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getFinalInspectionForHeatNumber(heatNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
