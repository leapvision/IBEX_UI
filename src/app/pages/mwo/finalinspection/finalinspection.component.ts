import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-finalinspection",
  templateUrl: "./finalinspection.component.html",
  styleUrls: ["./finalinspection.component.scss"],
  providers: [DecimalPipe],
})
export class FinalInspectionComponent implements OnInit {
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;

  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Final Inspection", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
