import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class MTOFurnaceSettingsService {
  apiurl = "http://localhost:8000/Setting/meltingFurnace/";

  constructor(private http: HttpClient) {}

  getAllMeltingFurnaces() {
    return this.http.get(this.apiurl);
  }

  getMeltingFurnaceByID(id) {
    let url = this.apiurl + id;
    return this.http.get(url);
  }

  addMeltingFurnace(machineData) {
    return this.http.post(this.apiurl, machineData);
  }
}
