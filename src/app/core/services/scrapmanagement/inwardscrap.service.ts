import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class InwardScrapService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "GRN No", rowspan: "1" },
      { heading: "Alloy Name", rowspan: "1" },
      { heading: "Source", rowspan: "1" },
      { heading: "Weight(KG)", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
  ];

  apiurl = "http://localhost:8000/scrap_management/inwardScrap/";

  constructor(private http: HttpClient) {}

  getAllInwardScrap(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/scrap_management/inwardScrap/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  addInwardScrap(inwardScrapData) {
    return this.http.post(this.apiurl, inwardScrapData);
  }
}
