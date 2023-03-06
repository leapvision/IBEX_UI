import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class MTOMeltingService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Melting Temperature", colspan: "2" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Value (°C)" },
      { heading: "Image" },
    ],
  ];

  apiurl = "http://localhost:8000/MTO/mtoMelting/";

  constructor(private http: HttpClient) {}

  getAllMeltingReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/MTO/mtoMelting/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }
}
