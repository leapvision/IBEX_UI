import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class InwardScrapService {
  apiurl = "http://localhost:8000/scrap_management/inwardScrap/";

  constructor(private http: HttpClient) {}

  addInwardScrap(inwardScrapData) {
    return this.http.post(this.apiurl, inwardScrapData);
  }
}
