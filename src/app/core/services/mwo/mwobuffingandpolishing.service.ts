import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class MWOBuffingAndPolishingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Final Heat Number", rowspan: "1" },
      { heading: "Total Ingots", colspan: "6" },
      { heading: "Status", colspan: "2" },
      { heading: "Remarks", rowspan: "1" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Total Ingots" },
      { heading: "Total Ingots Quantity (KG)" },
      { heading: "Ok Ingots" },
      { heading: "Ok Ingots Quantity (KG)" },
      { heading: "Not Ok Ingots" },
      { heading: "Not Ok Ingots Quantity (KG)" },
      { heading: "Buffing" },
      { heading: "Polishing" },
      { heading: "" },
    ],
  ];

  apiurl = "http://localhost:8000/MWO/mwoBuffingPolishing/";

  constructor(private http: HttpClient) {}

  getAllBuffingAndPolishingReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/MWO/mwoBuffingPolishing/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForBuffingAndPolishing() {
    let url = "http://localhost:8000/MWO/readyForBuffingPolishing/";
    return this.http.get(url);
  }

  addBuffingAndPolishing(buffingAndPolishingData) {
    return this.http.post(this.apiurl, buffingAndPolishingData);
  }

  updateReadyForPrinting(printingDoneData) {
    return this.http.put(this.apiurl, printingDoneData);
  }
}
