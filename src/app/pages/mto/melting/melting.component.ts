import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "./melting.service";
import { MaterialLoadingService } from "../loadingofrm/loadingofrm.service";

@Component({
  selector: "app-melting",
  templateUrl: "./melting.component.html",
  styleUrls: ["./melting.component.scss"],
  providers: [DecimalPipe],
})
export class MeltingComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private materialLoadingService: MaterialLoadingService,
    private meltingService: MeltingService
  ) {}

  materialLoadingHeadingArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).heading;
  materialLoadingBodyArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).body;
  meltingHeadingArray = this.meltingService.getMeltingReport().heading;
  meltingBodyArray = this.meltingService.getMeltingReport().body;

  parentReports: Array<{}> = [
    {
      name: "Material Loading",
      heading: this.materialLoadingHeadingArray,
      body: this.materialLoadingBodyArray,
      children: true,
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Melting", active: true },
    ];
  }
}
