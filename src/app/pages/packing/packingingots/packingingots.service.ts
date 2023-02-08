import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PackingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Pallet Number", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Number of Ingots", rowspan: "1" },
      { heading: "Manufacturing Date", rowspan: "1" },
      { heading: "Total Weight With Pallet", rowspan: "1" },
      { heading: "Pallet Weight", rowspan: "1" },
      { heading: "Ingot Weight", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "1" },
      { value: "IBEX-MW-01-1001-221222" },
      { value: "70" },
      { value: "22/12/2022" },
      { value: "962" },
      { value: "12" },
      { value: "950" },
      { isForm: true },
    ],
    [
      { value: "2" },
      { value: "IBEX-MW-01-1001-221222" },
      { value: "70" },
      { value: "22/12/2022" },
      { value: "962" },
      { value: "12" },
      { value: "950" },
      { isForm: true },
    ],
  ];

  constructor() {}

  getPackingReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getPackingForHeatNumber(heatNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
