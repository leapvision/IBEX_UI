import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MWOPrintingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Total Ingots", colspan: "6" },
      { heading: "Status", colspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Total Ingots" },
      { heading: "Total Ingots Quantity (KG)" },
      { heading: "Ok Ingots" },
      { heading: "Ok Ingots Quantity (KG)" },
      { heading: "Not Ok Ingots" },
      { heading: "Not Ok Ingots Quantity (KG)" },
      { heading: "" },
      { heading: "" },
    ],
  ];

  apiurl = `${environment.domain}/MWO/mwoPrinting/`;

  constructor(private http: HttpClient) {}

  getAllPrintingReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForPrinting() {
    let url = `${environment.domain}/MWO/readyForPrinting/`;
    return this.http.get(url);
  }

  addPrinting(printingData) {
    return this.http.post(this.apiurl, printingData);
  }

  updateReadyForFinalInspection(finalInspectionDoneData) {
    return this.http.put(this.apiurl, finalInspectionDoneData);
  }
}
