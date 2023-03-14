import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MWOVisualInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Status", colspan: "6" },
      { heading: "Remarks", colspan: "2" },
    ],
    [
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

  apiurl = `${environment.domain}/MWO/mwoVisualInspection/`;

  constructor(private http: HttpClient) {}

  getAllVisualInspectionReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForVisualInspection() {
    let url = `${environment.domain}/MWO/readyForVisualInspection/`;
    return this.http.get(url);
  }

  addVisualInspection(visualinspectionData) {
    return this.http.post(this.apiurl, visualinspectionData);
  }

  updateReadyForBuffingAndPolishing(buffingandpolishingDoneData) {
    return this.http.put(this.apiurl, buffingandpolishingDoneData);
  }
}
