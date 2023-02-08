import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { IgnotPouringService } from "./ingotpouring.service";
import { MwoInspectionService } from "../mwoinspection/mwoinspection.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";

@Component({
  selector: "app-ingotpouring",
  templateUrl: "./ingotpouring.component.html",
  styleUrls: ["./ingotpouring.component.scss"],
  providers: [DecimalPipe],
})
export class IngotPouringComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoinspectionService: MwoInspectionService,
    private ingotpouringService: IgnotPouringService
  ) {}

  transfertomwoHeadingArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .heading;
  transfertomwoBodyArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .heading;
  slagremovingBodyArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .body;
  mwoinspectionHeadingArray =
    this.mwoinspectionService.getMwoInspectionReportForMeltNumber("meltNumber")
      .heading;
  mwoinspectionBodyArray =
    this.mwoinspectionService.getMwoInspectionReportForMeltNumber("meltNumber")
      .body;
  ingotpouringHeadingArray =
    this.ingotpouringService.getIgnotPouringReport().heading;
  ingotpouringBodyArray = this.ingotpouringService.getIgnotPouringReport().body;
  parentReports: Array<{}> = [
    {
      name: "Slag Removal",
      heading: this.slagremovingHeadingArray,
      body: this.slagremovingBodyArray,
      children: true,
    },
    {
      name: "Transfer to MWO",
      heading: this.transfertomwoHeadingArray,
      body: this.transfertomwoBodyArray,
      children: true,
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Ignot Pouring", active: true },
    ];
  }
}
