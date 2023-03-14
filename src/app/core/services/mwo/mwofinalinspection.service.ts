import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MWOFinalInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Total Ingots", colspan: "6" },
      { heading: "Status", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Total Printed Ingots" },
      { heading: "Total Printed Ingots Quantity (KG)" },
      { heading: "Ok Printed Ingots" },
      { heading: "Ok Printed Ingots Quantity (KG)" },
      { heading: "Not Ok Printed Ingots" },
      { heading: "Not Ok Printed Ingots Quantity (KG)" },
      { heading: "" },
      { heading: "" },
    ],
  ];

  apiurl = `${environment.domain}/MWO/mwoFinalInspection/`;

  constructor(private http: HttpClient) {}

  getAllFinalInspectionReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForFinalInspection() {
    let url = `${environment.domain}/MWO/readyForFinalInspection/`;
    return this.http.get(url);
  }

  addFinalInspection(finalInspectionData) {
    return this.http.post(this.apiurl, finalInspectionData);
  }

  updateReadyForPacking(packingDoneData) {
    return this.http.put(this.apiurl, packingDoneData);
  }
}
