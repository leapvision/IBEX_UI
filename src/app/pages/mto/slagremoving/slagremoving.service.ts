import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SlagRemovingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Slag Removal Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Slag Removal Quantity (KG)", rowspan: "1" },
      { heading: "Time", colspan: "2" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "" },
      { value: "MT-01-1001" },
      { value: "17" },
      { value: "10:20" },
      { showParentReport: false },
    ],
    [
      { value: "20/12/2022" },
      { value: "" },
      { value: "MT-01-1002" },
      { value: "18" },
      { value: "10:50" },
      { showParentReport: false },
    ],
    [
      { value: "10/12/2022" },
      { value: "" },
      { value: "MT-01-1003" },
      { value: "15" },
      { value: "11:20" },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getSlagRemovingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }
}
