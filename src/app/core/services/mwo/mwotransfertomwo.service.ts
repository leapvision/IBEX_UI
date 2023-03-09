import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class MWOTransferToMWOService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Melt No", rowspan: "1" },
      { heading: "Hold No", colspan: "2" },
    ],
  ];

  apiurl = "http://localhost:8000/MWO/mwoTransfer/";

  constructor(private http: HttpClient) {}

  getAllTransferToMWOReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/MWO/mwoTransfer/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForTransferToMWO() {
    let url = "http://localhost:8000/MTO/readyForMWOTransfer/";
    return this.http.get(url);
  }

  addTransferToMWO(transfertomwoData) {
    return this.http.post(this.apiurl, transfertomwoData);
  }
}
