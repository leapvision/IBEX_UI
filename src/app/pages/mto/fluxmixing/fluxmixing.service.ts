import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FluxMixingService {
  headingArray = [
    [
      { heading: "", rowspan: "1" },
      { heading: "Sl No", rowspan: "1" },
      { heading: "Flux Mixing Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Flux Adding Quantity (KG)", rowspan: "1" },
      { heading: "N2 Degassing", colspan: "5" },
      { heading: "Mixing Temperature", colspan: "2" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Type 0" },
      { heading: "Type 5" },
      { heading: "Type 12" },
      { heading: "Start Time" },
      { heading: "End Time" },
      { heading: "Value (°C)" },
      { heading: "Image" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "" },
      { value: "MT-01-1001" },
      { value: "470" },
      { value: "70" },
      { value: "4" },
      { value: "10:00" },
      { value: "10:15" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
    ],
    [
      { value: "20/12/2022" },
      { value: "" },
      { value: "MT-01-1002" },
      { value: "170" },
      { value: "70" },
      { value: "4" },
      { value: "10:30" },
      { value: "10:45" },
      { value: "720" },
      { img: "assets/images/small/img-3.jpg" },
    ],
    [
      { value: "10/12/2022" },
      { value: "" },
      { value: "MT-01-1003" },
      { value: "10" },
      { value: "0" },
      { value: "4" },
      { value: "11:00" },
      { value: "11:15" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
    ],
  ];

  constructor() {}

  getFluxMixingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getFluxMixingReportForMeltNumber(meltNumber: string) {
    return {
      heading: this.headingArray.slice(0, 1),
      body: this.bodyArray.slice(0, 1),
    };
  }
}
