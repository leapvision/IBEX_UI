import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MaterialLoadingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Sale Order No", rowspan: "1" },
      { heading: "Alloy Name", rowspan: "1" },
      { heading: "Load Weight", rowspan: "1" },
      { heading: "Detailed View", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "MT-01-1001" },
      { value: "1" },
      { value: "AM50A" },
      { value: "550" },
      { viewDetails: true },
      { showParentReport: false },
    ],
    [
      { value: "20/12/2022" },
      { value: "MT-01-1002" },
      { value: "2" },
      { value: "AM50A" },
      { value: "550" },
      { viewDetails: true },
      { showParentReport: false },
    ],
    [
      { value: "10/12/2022" },
      { value: "MT-01-1003" },
      { value: "3" },
      { value: "AM50A" },
      { value: "550" },
      { viewDetails: true },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getMaterialLoadingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }
}
