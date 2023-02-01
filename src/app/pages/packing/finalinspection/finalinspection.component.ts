import { FinalInspectionService } from "./finalinspection.service";
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

  constructor(private fluxinspectionService: FinalInspectionService) {}

  fluxinspectionHeadingArray =
    this.fluxinspectionService.getFinalInspectionReport().heading;
  fluxinspectionBodyArray =
    this.fluxinspectionService.getFinalInspectionReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Packing" },
      { label: "Final Inspection", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
