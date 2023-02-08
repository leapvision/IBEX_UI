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
      { heading: "Hold Number", rowspan: "1" },
      { heading: "Scrap (KG)", rowspan: "1" },
      { heading: "Addition Details(KG)", colspan: "5" },
      { heading: "Metal Tapping to MWO", colspan: "4" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Be (Grams)" },
      { heading: "Pure Alu" },
      { heading: "Zinc" },
      { heading: "Al Mn" },
      { heading: "Pure Mg" },
      { heading: "Tapping Temp", colspan: "2" },
      { heading: "Time" },
      { heading: "Quantity(KG)" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Value(°C)" },
      { heading: "Image" },
      { heading: "" },
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "" },
      { value: "MW-01-1001" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
      { value: "9:00" },
      { value: "550" },
      { showParentReport: false },
    ],
    [
      { value: "20/12/2022" },
      { value: "" },
      { value: "MW-01-1002" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
      { value: "11:00" },
      { value: "550" },
      { showParentReport: false },
    ],
    [
      { value: "10/12/2022" },
      { value: "" },
      { value: "MW-01-1003" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
      { value: "10:00" },
      { value: "550" },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getSlagRemovingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getSlagRemovingReportForMeltNumber(meltNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
