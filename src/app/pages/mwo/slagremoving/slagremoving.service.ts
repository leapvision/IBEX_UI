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
      { heading: "Addition Details", colspan: "5" },
      { heading: "Metal Tapping to MWO", colspan: "4" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Be (Grams)" },
      { heading: "Pure Alu (KG)" },
      { heading: "Zinc (KG)" },
      { heading: "Al Mn (KG)" },
      { heading: "Pure Mg (KG)" },
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
      { heading: "Value(°C)" },
      { heading: "Image" },
      { heading: "" },
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "10:15" },
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
    ],
    [
      { value: "20/12/2022" },
      { value: "10:00" },
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
    ],
    [
      { value: "10/12/2022" },
      { value: "10:20" },
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
