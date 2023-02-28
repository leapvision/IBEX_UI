import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class MWOFurnaceSettingsService {
  apiurl = "http://localhost:8000/Setting/holdingFurnace/";

  constructor(private http: HttpClient) {}

  getAllHoldingFurnaces() {
    return this.http.get(this.apiurl);
  }

  addHoldingFurnace(machineData) {
    return this.http.post(this.apiurl, machineData);
  }
}
