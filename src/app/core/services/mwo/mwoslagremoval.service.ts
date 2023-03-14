import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class MWOSlagRemovalService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Slag Removal Date", rowspan: "1" },
      { heading: "Shift", rowspan: "1" },
      { heading: "Hold Number", rowspan: "1" },
      { heading: "Addition Details", colspan: "5" },
      { heading: "Metal Tapping to MWO", colspan: "4" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Be (Grams)" },
      { heading: "Pure Alu (KG)" },
      { heading: "Zinc (KG)" },
      { heading: "Al Mn (KG)" },
      { heading: "Pure Mg (KG)" },
      { heading: "Tapping Temp", colspan: "2" },
      { heading: "Time" },
      { heading: "Quantity(KG)" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Value(°C)" },
      { heading: "Image" },
      { heading: "" },
      { heading: "" },
    ],
  ];

  apiurl = `${environment.domain}/MWO/mwoSlagRemoval/`;

  constructor(private http: HttpClient) {}

  getAllSlagRemovalReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `${this.apiurl}?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForSlagRemoval() {
    let url = `${environment.domain}/MWO/readyForSlagRemoval/`;
    return this.http.get(url);
  }

  addSlagRemoval(slagRemovalData) {
    return this.http.post(this.apiurl, slagRemovalData);
  }

  updateReadyForCompositionCheck(compositionCheckDoneData) {
    return this.http.put(this.apiurl, compositionCheckDoneData);
  }
}
