import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class InwardScrapInspectionService {
  apiurl = "http://localhost:8000/scrap_management/scrapInspection/";

  constructor(private http: HttpClient) {}

  getAllInwardScrapInspection(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/scrap_management/scrapInspection/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }
}
