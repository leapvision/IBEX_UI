import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MWOIngotPouringService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Ingot Pouring Date", rowspan: "1" },
      { heading: "Shift", rowspan: "1" },
      { heading: "Hold Number", rowspan: "1" },
      { heading: "Ingot Pouring", colspan: "4" },
      { heading: "Ingot Details", colspan: "2" },
      { heading: "Final Heat Number", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Temp(°C)" },
      { heading: "Image" },
      { heading: "Time" },
      { heading: "Quantity(KG)" },
      { heading: "No of Ingots Poured" },
      { heading: "Ingot Weight(KG)" },
      { heading: "" },
    ],
  ];

  apiurl = `${environment.domain}/MWO/mwoIngotsPouring/`;

  constructor(private http: HttpClient) {}

  getAllIngotPouringReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForIngotPouring() {
    let url = `${environment.domain}/MWO/readyForIngotsPouring/`;
    return this.http.get(url);
  }

  addIngotPouring(ingotPouringData) {
    return this.http.post(this.apiurl, ingotPouringData);
  }

  updateReadyForVisualInspection(visualinspectionDoneData) {
    return this.http.put(this.apiurl, visualinspectionDoneData);
  }
}
