import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class MWOCompositionCheckService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Hold Number", rowspan: "1" },
      { heading: "Sample 1", rowspan: "1" },
      { heading: "Sample 2", rowspan: "1" },
      { heading: "Sample 3", rowspan: "1" },
      { heading: "Sample 4", rowspan: "1" },
      { heading: "Sample 5", rowspan: "1" },
      { heading: "Action", rowspan: "1" },
      { heading: "Remarks", rowspan: "1" },
    ],
  ];

  samplesArray = [
    {
      name: "Al (%)",
      value: 5.0,
      good: true,
    },
    {
      name: "Zn (%)",
      value: 0.06,
      good: true,
    },
    {
      name: "Mn (%)",
      value: 0.292,
      ok: true,
    },
    {
      name: "Si (%)",
      value: 0.018,
      good: true,
    },
    {
      name: "Fe (%)",
      value: 0.0026,
      good: true,
    },
    {
      name: "Cu (%)",
      value: 0.0004,
      good: true,
    },
    {
      name: "Ni (%)",
      value: 0.001,
      good: true,
    },
    {
      name: "Be (%)",
      value: 0.0006,
      good: true,
    },
    {
      name: "Ca (%)",
      value: 0.0018,
      bad: true,
    },
    {
      name: "Cd (%)",
      value: 0.0001,
      bad: true,
    },
    {
      name: "Ag (%)",
      value: 0.0006,
      good: true,
    },
    {
      name: "La (%)",
      value: 0.0015,
      good: true,
    },
    {
      name: "Zr (%)",
      value: 0.0015,
      good: true,
    },
    {
      name: "Na (%)",
      value: 0.008,
      good: true,
    },
    {
      name: "P (%)",
      value: 0.008,
      good: true,
    },
    {
      name: "Pb (%)",
      value: 0.004,
      good: true,
    },
    {
      name: "Sn (%)",
      value: 0.011,
      good: true,
    },
    {
      name: "Mg (%)",
      value: 94.6,
      good: true,
    },
  ];

  apiurl = "http://localhost:8000/MWO/mwoInspection/";

  constructor(private http: HttpClient) {}

  getAllCompositionCheckReport(pageSize, pageNumber, searchValue) {
    return this.http.get(
      `http://localhost:8000/MWO/mwoInspection/?pageSize=${pageSize}&pageNumber=${pageNumber}&searchValue=${searchValue}`
    );
  }

  getAllReadyForCompositionCheck() {
    let url = "http://localhost:8000/MWO/readyForInspection/";
    return this.http.get(url);
  }

  addCompositionCheck(compositionCheckData) {
    return this.http.post(this.apiurl, compositionCheckData);
  }

  updateReadyForIngotPouring(ingotPouringDoneData) {
    return this.http.put(this.apiurl, ingotPouringDoneData);
  }
}
