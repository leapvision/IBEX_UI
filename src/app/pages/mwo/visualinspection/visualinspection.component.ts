import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { IgnotPouringService } from "../ignotpouring/ingotpouring.service";
import { MwoInspectionService } from "../mwoinspection/mwoinspection.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { VisualInspectionService } from "./visualinspection.service";

@Component({
  selector: "app-visualinspection",
  templateUrl: "./visualinspection.component.html",
  styleUrls: ["./visualinspection.component.scss"],
  providers: [DecimalPipe],
})
export class VisualInspectionComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoinspectionService: MwoInspectionService,
    private ingotpouringService: IgnotPouringService,
    private visualinspectionService: VisualInspectionService
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
    this.ingotpouringService.getIngotPouringReportForMeltNumber("meltNumber")
      .heading;
  ingotpouringBodyArray =
    this.ingotpouringService.getIngotPouringReportForMeltNumber("meltNumber")
      .body;
  visualinspectionHeadingArray =
    this.visualinspectionService.getVisualInspectionReport().heading;
  visualinspectionBodyArray =
    this.visualinspectionService.getVisualInspectionReport().body;
  parentReports: Array<{}> = [
    {
      name: "Ingot Pouring",
      heading: this.ingotpouringHeadingArray,
      body: this.ingotpouringBodyArray,
      children: true,
    },
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
      { label: "Visual Inspection", active: true },
    ];
  }
}
