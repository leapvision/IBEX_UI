import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MTOSlagRemovalService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Slag Removal Date", rowspan: "1" },
      { heading: "Shift", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Slag Removal Quantity (KG)", rowspan: "1" },
      { heading: "Time", colspan: "2" },
    ],
  ];

  apiurl = `${environment.domain}/MTO/mtoSlagRemoval/`;

  constructor(private http: HttpClient) {}

  getAllSlagRemovalReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForSlagRemoval() {
    let url = `${environment.domain}/MTO/readyForSlagRemoval/`;
    return this.http.get(url);
  }

  addSlagRemoval(slagRemovalData) {
    return this.http.post(this.apiurl, slagRemovalData);
  }

  updateReadyForSlagInspection(slagInspectionDoneData) {
    return this.http.put(this.apiurl, slagInspectionDoneData);
  }
}
