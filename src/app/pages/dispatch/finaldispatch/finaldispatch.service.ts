import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FinalDispatchService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Invoice Number", rowspan: "1" },
      { heading: "Container No", rowspan: "1" },
      { heading: "Seal No", rowspan: "1" },
      { heading: "Vehicle No", rowspan: "1" },
      { heading: "Empty Container Image", rowspan: "1" },
      { heading: "Loading Container Image", rowspan: "1" },
      { heading: "Fully Container Image", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "IEPL/1300/22-23" },
      { value: "MRKU09876SH" },
      { value: "4575" },
      { value: "KA53B65397" },
      { viewDetails: true },
      { viewDetails: true },
      { viewDetails: true },
      { showParentReport: false },
    ],
    [
      { value: "IEPL/1300/22-23" },
      { value: "MRKU09876SH" },
      { value: "4575" },
      { value: "KA53B65397" },
      { viewDetails: true },
      { viewDetails: true },
      { viewDetails: true },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getFinalDispatchReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getFinalDispatchForInvoiceNumber(invoiceNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
