import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ScrapInspectionService {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Alloy Name", rowspan: "1" },
      { heading: "Source", rowspan: "1" },
      { heading: "Weight(KG)", rowspan: "1" },
    ],
  ];
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "AM50A" },
      { value: "Steel Line India" },
      { value: "700" },
    ],
    [
      { value: "20/12/2022" },
      { value: "AM50A" },
      { value: "CMR" },
      { value: "500" },
    ],
    [
      { value: "10/12/2022" },
      { value: "AZ91D" },
      { value: "Sunland" },
      { value: "200" },
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

  constructor() {}

  getScrapInspectionReport() {
    return { heading: this.headingArray, body: this.bodyArray };
  }
}
