import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FinalInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Status", colspan: "3" },
      { heading: "Remarks", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "Total Printed Ingots" },
      { heading: "Ok Printed Ingots" },
      { heading: "Not Ok Printed Ingots" },
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "IBEX-MW-01-1001-221222" },
      { value: "70" },
      { value: "70" },
      { value: "0" },
      { form: true },
    ],
    [
      { value: "IBEX-MW-01-1002-221220" },
      { value: "75" },
      { value: "75" },
      { value: "0" },
      { form: true },
    ],
    [
      { value: "IBEX-MW-02-1003-221210" },
      { value: "70" },
      { value: "70" },
      { value: "0" },
      { form: true },
    ],
  ];

  constructor() {}

  getFinalInspectionReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }
}
