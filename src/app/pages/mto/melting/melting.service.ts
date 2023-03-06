import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MeltingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Melting Temperature", colspan: "2" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Value (°C)" },
      { heading: "Image" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "" },
      { value: "MT-01-1001" },
      { value: "550" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
    ],
    [
      { value: "20/12/2022" },
      { value: "" },
      { value: "MT-01-1001" },
      { value: "550" },
      { value: "40" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
    ],
    [
      { value: "10/12/2022" },
      { value: "" },
      { value: "MT-01-1001" },
      { value: "550" },
      { value: "35" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
    ],
  ];

  constructor() {}

  getMeltingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getMeltingReportForMeltingNumber(meltNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
