import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  headingArray = [
    [
      { heading: "Line 1", colspan: "6" },
      { heading: "Line 2", colspan: "6" },
    ],
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Team", colspan: "2" },
      { heading: "Shift", rowspan: "1" },
      { heading: "Start", rowspan: "1" },
      { heading: "End", rowspan: "1" },
      { heading: "Sl No", rowspan: "1" },
      { heading: "Team", colspan: "2" },
      { heading: "Shift", rowspan: "1" },
      { heading: "Start", rowspan: "1" },
      { heading: "End", rowspan: "1" },
    ],
  ];

  bodyArray = [[{ value: "1" }], [{ value: "2" }], [{ value: "3" }]];

  getCurrentStatus() {
    return {
      heading: this.headingArray,
      body: this.bodyArray,
    };
  }
}
