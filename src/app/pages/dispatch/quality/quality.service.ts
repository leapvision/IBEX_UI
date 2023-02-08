import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class QualityService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Invoice Number", rowspan: "1" },
      { heading: "Invoice Date", rowspan: "1" },
      { heading: "PO No & Date", rowspan: "1" },
      { heading: "Commodity", rowspan: "1" },
      { heading: "Customer", rowspan: "1" },
      { heading: "Packing List No", rowspan: "1" },
      { heading: "Container No", rowspan: "1" },
      { heading: "View Remarks", rowspan: "1" },
      { heading: "Download", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "IEPL/1300/22-23" },
      { value: "22/12/2022" },
      { value: "TIPL/0148/22-23 & 31-10-2022" },
      { value: "Magnesium Alloy Ingots - AM50A" },
      { value: "TRISTAR INTERMEDIATES PVT LTD" },
      { value: "1001" },
      { value: "MRKU09876SH" },
      { viewDetails: true },
      { download: true },
      { showParentReport: false },
    ],
    [
      { value: "IEPL/1300/22-23" },
      { value: "22/12/2022" },
      { value: "TIPL/0148/22-23 & 31-10-2022" },
      { value: "Magnesium Alloy Ingots - AM50A" },
      { value: "TRISTAR INTERMEDIATES PVT LTD" },
      { value: "1001" },
      { value: "MRKU09876SH" },
      { viewDetails: true },
      { download: true },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getQualityReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getQualityForInvoiceNumber(invoiceNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
