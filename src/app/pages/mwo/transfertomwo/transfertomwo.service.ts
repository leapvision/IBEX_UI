import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransferToMwoService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Melt No", rowspan: "1" },
      { heading: "Hold No", colspan: "2" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "" },
      { value: "MT-01-1001" },
      { value: "MWO-01-1001" },
    ],
    [
      { value: "20/12/2022" },
      { value: "" },
      { value: "MT-01-1002" },
      { value: "MWO-01-1002" },
    ],
    [
      { value: "10/12/2022" },
      { value: "" },
      { value: "MT-01-1003" },
      { value: "MWO-01-1003" },
    ],
  ];

  constructor() {}

  getTransferToMwoReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getTransferToMwoReportForMeltNumber(meltNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
