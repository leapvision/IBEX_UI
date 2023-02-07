import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FinalInspectionService } from "../../mwo/finalinspection/finalinspection.service";

@Component({
  selector: "app-packingingots",
  templateUrl: "./packingingots.component.html",
  styleUrls: ["./packingingots.component.scss"],
  providers: [DecimalPipe],
})
export class PackingIngotsComponent implements OnInit {
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
      { label: "Ingots", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
