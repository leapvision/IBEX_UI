import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class InwardScrapInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "GRN No", rowspan: "1" },
      { heading: "Alloy Name", rowspan: "1" },
      { heading: "Source", rowspan: "1" },
      { heading: "Weight(KG)", rowspan: "1" },
    ],
  ];

  apiurl = "http://localhost:8000/scrap_management/scrapInspection/";

  constructor(private http: HttpClient) {}

  getAllInwardScrapInspection(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/scrap_management/scrapInspection/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }
}
