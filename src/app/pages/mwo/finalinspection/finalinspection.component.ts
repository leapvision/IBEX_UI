import { FinalInspectionService } from "./finalinspection.service";
import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { BuffingAndPolishingService } from "../buffingandpolishing/buffingandpolishing.service";
import { IgnotPouringService } from "../ignotpouring/ingotpouring.service";
import { MwoInspectionService } from "../mwoinspection/mwoinspection.service";
import { PrintingService } from "../printing/printing.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { VisualInspectionService } from "../visualinspection/visualinspection.service";

@Component({
  selector: "app-finalinspection",
  templateUrl: "./finalinspection.component.html",
  styleUrls: ["./finalinspection.component.scss"],
  providers: [DecimalPipe],
})
export class FinalInspectionComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoinspectionService: MwoInspectionService,
    private ingotpouringService: IgnotPouringService,
    private visualinspectionService: VisualInspectionService,
    private buffingandpolishingService: BuffingAndPolishingService,
    private printingService: PrintingService,
    private finalinspectionService: FinalInspectionService
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
    this.buffingandpolishingService.getBuffingAndPolishingForMeltNumber(
      "meltNumber"
    ).heading;
  buffingandpolishingBodyArray =
    this.buffingandpolishingService.getBuffingAndPolishingForMeltNumber(
      "meltNumber"
    ).body;
  printingHeadingArray =
    this.printingService.getPrintingForHeatNumber("heatNumber").heading;
  printingBodyArray =
    this.printingService.getPrintingForHeatNumber("heatNumber").body;
  finalInspectionHeadingArray =
    this.finalinspectionService.getFinalInspectionReport().heading;
  finalInspectionBodyArray =
    this.finalinspectionService.getFinalInspectionReport().body;

  parentReports: Array<{}> = [
    {
      name: "Printing",
      heading: this.printingHeadingArray,
      body: this.printingBodyArray,
      children: true,
    },
    {
      name: "Buffing And Polishing",
      heading: this.buffingandpolishingHeadingArray,
      body: this.buffingandpolishingBodyArray,
      children: true,
    },
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
      { label: "Final Inspection", active: true },
    ];
  }
}
