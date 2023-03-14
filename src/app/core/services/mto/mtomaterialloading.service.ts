import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MTOMaterialLoadingService {
  headingArray = [];

  apiurl = `${environment.domain}/MTO/mtoMaterialLoading`;

  constructor(private http: HttpClient) {}

  getAllMaterialLoadingReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForMaterialLoading() {
    let url = `${environment.domain}/MTO/readyForMaterialLoading/`;
    return this.http.get(url);
  }

  addMaterialLoading(materialLoadingData) {
    return this.http.post(this.apiurl, materialLoadingData);
  }

  updateReadyForMelting(meltingDoneData) {
    return this.http.put(this.apiurl, meltingDoneData);
  }
}
