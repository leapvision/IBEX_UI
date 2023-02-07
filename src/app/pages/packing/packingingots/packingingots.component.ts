import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FinalInspectionService } from "../../mwo/finalinspection/finalinspection.service";
import { PackingService } from "./packingingots.service";

@Component({
  selector: "app-packingingots",
  templateUrl: "./packingingots.component.html",
  styleUrls: ["./packingingots.component.scss"],
  providers: [DecimalPipe],
})
export class PackingIngotsComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(private packingService: PackingService) {}

  packingHeadingArray = this.packingService.getPackingReport().heading;
  packingBodyArray = this.packingService.getPackingReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Packing" },
      { label: "Ingots", active: true },
    ];
  }
}
