import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { IgnotPouringService } from "../ignotpouring/ingotpouring.service";
import { MwoInspectionService } from "../mwoinspection/mwoinspection.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { VisualInspectionService } from "../visualinspection/visualinspection.service";
import { BuffingAndPolishingService } from "./buffingandpolishing.service";

@Component({
  selector: "app-buffingandpolishing",
  templateUrl: "./buffingandpolishing.component.html",
  styleUrls: ["./buffingandpolishing.component.scss"],
  providers: [DecimalPipe],
})
export class BuffingAndPolishingComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoinspectionService: MwoInspectionService,
    private ingotpouringService: IgnotPouringService,
    private visualinspectionService: VisualInspectionService,
    private buffingandpolishingService: BuffingAndPolishingService
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
    this.visualinspectionService.getVisualInspectionForMeltNumber("meltNumber")
      .heading;
  visualinspectionBodyArray =
    this.visualinspectionService.getVisualInspectionForMeltNumber("meltNumber")
      .body;
  buffingandpolishingHeadingArray =
    this.buffingandpolishingService.getBuffingAndPolishingReport().heading;
  buffingandpolishingBodyArray =
    this.buffingandpolishingService.getBuffingAndPolishingReport().body;
  parentReports: Array<{}> = [
    {
      name: "Visual Inspection",
      heading: this.visualinspectionHeadingArray,
      body: this.visualinspectionBodyArray,
      children: true,
    },
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
      { label: "Buffing & Polishing", active: true },
    ];
  }
}
