import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MTOFluxMixingService {
  headingArray = [];

  apiurl = `${environment.domain}/MTO/mtoFluxMixing`;

  constructor(private http: HttpClient) {}

  getAllFluxMixingReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForFluxMixing() {
    let url = `${environment.domain}/MTO/readyForFluxMixing/`;
    return this.http.get(url);
  }

  addFluxMixing(fluxMixingData) {
    return this.http.post(this.apiurl, fluxMixingData);
  }

  updateReadyForSlagRemoval(slagRemovalDoneData) {
    return this.http.put(this.apiurl, slagRemovalDoneData);
  }
}
