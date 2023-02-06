import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SlagInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
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
      { value: "MT-01-1001" },
      { value: "Done" },
      { value: "Done" },
      { value: "Done" },
      { value: "Done" },
      { value: "-" },
      { isButton: true, innerText: "Moved to MWO", success: true },
      { isForm: true },
      { showParentReport: false },
    ],
    [
      { value: "20/12/2022" },
      { value: "MT-01-1002" },
      { value: "Done" },
      { value: "-" },
      { value: "-" },
      { value: "-" },
      { value: "-" },
      { isButton: true, innerText: "Moved to MWO", success: true },
      { isForm: true },
      { showParentReport: false },
    ],
    [
      { value: "10/12/2022" },
      { value: "MT-01-1003" },
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

  getSlagInspectionReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getSlagInspectionReportForMeltNumber(meltNumber: string) {
    return {
      heading: this.headingArray.slice(0, 1),
      body: this.bodyArray.slice(0, 1),
    };
  }
}
