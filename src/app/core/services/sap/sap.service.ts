import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class SAPService {
  apiurl = "http://localhost:8000/sap/sapGRN/";

  constructor(private http: HttpClient) {}

  getAllGRNs() {
    return this.http.get(this.apiurl);
  }

  getGRNByID(id) {
    let url = this.apiurl + id;
    return this.http.get(url);
  }

  updateGRN(grnData) {
    return this.http.put(this.apiurl, grnData);
  }
}
