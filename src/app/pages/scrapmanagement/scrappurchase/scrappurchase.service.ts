import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ScrapPurchaseService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "GRN No", rowspan: "1" },
      { heading: "Alloy Name", rowspan: "1" },
      { heading: "Source", rowspan: "1" },
      { heading: "Weight(KG)", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "1" },
      { value: "AM50A" },
      { value: "Steel Line India" },
      { value: "700" },
      { value: "-" },
    ],
    [
      { value: "20/12/2022" },
      { value: "2" },
      { value: "AM50A" },
      { value: "CMR" },
      { value: "500" },
      { value: "-" },
    ],
    [
      { value: "10/12/2022" },
      { value: "3" },
      { value: "AM50A" },
      { value: "Sunland" },
      { value: "200" },
      { value: "-" },
    ],
  ];

  constructor() {}

  getScrapPurchaseReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }
  getScrapPurchaseReportForNumber() {
    return { heading: this.headingArray, body: this.bodyArray.slice(0, 1) };
  }
}
