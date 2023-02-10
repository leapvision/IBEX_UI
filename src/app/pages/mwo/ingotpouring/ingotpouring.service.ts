import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class IgnotPouringService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Ingot Pouring Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Hold Number", rowspan: "1" },
      { heading: "Ingot Pouring", colspan: "4" },
      { heading: "Ingot Details", colspan: "2" },
      { heading: "Final Heat Number", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Temp(°C)" },
      { heading: "Image" },
      { heading: "Time" },
      { heading: "Quantity(KG)" },
      { heading: "No of Ingots Poured" },
      { heading: "Ingot Weight(KG)" },
      { heading: "" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "" },
      { value: "MW-01-1001" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
      { value: "10:00" },
      { value: "550" },
      { value: "75" },
      { value: "547" },
      { value: "IBEX-MW-01-1001-221222" },
    ],
    [
      { value: "20/12/2022" },
      { value: "" },
      { value: "MW-01-1002" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
      { value: "10:00" },
      { value: "500" },
      { value: "70" },
      { value: "540" },
      { value: "IBEX-MW-01-1002-221220" },
    ],
    [
      { value: "10/12/2022" },
      { value: "" },
      { value: "MW-01-1003" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
      { value: "10:00" },
      { value: "500" },
      { value: "70" },
      { value: "540" },
      { value: "IBEX-MW-01-1002-221220" },
    ],
  ];

  constructor() {}

  getIgnotPouringReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getIngotPouringReportForMeltNumber(meltNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
