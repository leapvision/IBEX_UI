import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
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

  apiurl = "http://localhost:8000/MTO/mtoSlagRemoval/";

  constructor(private http: HttpClient) {}

  getAllSlagRemovalReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/MTO/mtoSlagRemoval/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForSlagRemoval() {
    let url = "http://localhost:8000/MTO/readyForSlagRemoval/";
    return this.http.get(url);
  }

  addSlagRemoval(slagRemovalData) {
    return this.http.post(this.apiurl, slagRemovalData);
  }
}
