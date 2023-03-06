import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class MTOSlagInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Sample 1", rowspan: "1" },
      { heading: "Sample 2", rowspan: "1" },
      { heading: "Sample 3", rowspan: "1" },
      { heading: "Sample 4", rowspan: "1" },
      { heading: "Sample 5", rowspan: "1" },
      { heading: "Action", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
  ];

  apiurl = "http://localhost:8000/MTO/mtoInspection/";

  constructor(private http: HttpClient) {}

  getAllSlagInspectionReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/MTO/mtoInspection/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }
}