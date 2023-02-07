import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FASService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Invoice Number", rowspan: "1" },
      { heading: "Invoice Date", rowspan: "1" },
      { heading: "Cust Ref", rowspan: "1" },
      { heading: "Cust Ref Date", rowspan: "1" },
      { heading: "Shipping Date", rowspan: "1" },
      { heading: "Consignee", rowspan: "1" },
      { heading: "Total Gross Weight", rowspan: "1" },
      { heading: "Total Net Weight", rowspan: "1" },
      { heading: "Total Pallets", rowspan: "1" },
      { heading: "Total PCS", rowspan: "1" },
      { heading: "View Remarks", rowspan: "1" },
      { heading: "Download", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "IEPL/1300/22-23" },
      { value: "22/12/2022" },
      { value: "TIPL/0148/22-23" },
      { value: "22/12/2022" },
      { value: "22/12/2022" },
      { value: "TRISTAR INTERMEDIATES PVT LTD" },
      { value: "50607" },
      { value: "50001" },
      { value: "50" },
      { value: "6852" },
      { viewDetails: true },
      { download: true },
      { showParentReport: false },
    ],
    [
      { value: "IEPL/1300/22-23" },
      { value: "22/12/2022" },
      { value: "TIPL/0148/22-23" },
      { value: "22/12/2022" },
      { value: "22/12/2022" },
      { value: "TRISTAR INTERMEDIATES PVT LTD" },
      { value: "50607" },
      { value: "50001" },
      { value: "50" },
      { value: "6852" },
      { viewDetails: true },
      { download: true },
      { showParentReport: false },
    ],
  ];

  constructor() {}

  getFASReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }

  getFASForInvoiceNumber(invoiceNumber: string) {
    return {
      heading: this.headingArray,
      body: this.bodyArray.slice(0, 1),
    };
  }
}
