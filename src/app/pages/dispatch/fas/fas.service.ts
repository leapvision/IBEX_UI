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

  packinglistsummaryBodyArray = [
    [{ value: "Total Gross Weight" }, { value: "25305" }],
    [{ value: "Total Net Weight" }, { value: "25003" }],
    [{ value: "Total Pallets" }, { value: "25" }],
    [{ value: "Total PCS" }, { value: "3409" }],
  ];

  packinglistHeadingArray = [
    [
      { heading: "Select", rowspan: "1" },
      { heading: "Pallet Number", rowspan: "1" },
      { heading: "Gross Weight(KG)", rowspan: "1" },
      { heading: "Net Weight(KG)", rowspan: "1" },
      { heading: "PCS", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
  ];

  packinglistBodyArray = [
    [
      { isCheckbox: true, checked: false },
      { value: "1001" },
      { value: "1106" },
      { value: "1094" },
      { value: "150" },
      { isForm: true },
    ],
    [
      { isCheckbox: true, checked: true },
      { value: "1002" },
      { value: "1124" },
      { value: "1104" },
      { value: "155" },
      { isForm: true },
    ],
    [
      { isCheckbox: true, checked: false },
      { value: "1003" },
      { value: "1124" },
      { value: "1094" },
      { value: "155" },
      { isForm: true },
    ],
    [
      { isCheckbox: true, checked: false },
      { value: "1004" },
      { value: "1106" },
      { value: "1094" },
      { value: "150" },
      { isForm: true },
    ],
    [
      { isCheckbox: true, checked: false },
      { value: "1005" },
      { value: "1106" },
      { value: "1094" },
      { value: "150" },
      { isForm: true },
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
