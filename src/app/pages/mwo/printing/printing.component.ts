import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { PrintingService } from "./printing.service";
import { BuffingAndPolishingService } from "../buffingandpolishing/buffingandpolishing.service";
import { IgnotPouringService } from "../ignotpouring/ingotpouring.service";
import { MwoInspectionService } from "../mwoinspection/mwoinspection.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { VisualInspectionService } from "../visualinspection/visualinspection.service";

@Component({
  selector: "app-printing",
  templateUrl: "./printing.component.html",
  styleUrls: ["./printing.component.scss"],
  providers: [DecimalPipe],
})
export class PrintingComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoinspectionService: MwoInspectionService,
    private ingotpouringService: IgnotPouringService,
    private visualinspectionService: VisualInspectionService,
    private buffingandpolishingService: BuffingAndPolishingService,
    private printingService: PrintingService
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
  printingHeadingArray = this.printingService.getPrintingReport().heading;
  printingBodyArray = this.printingService.getPrintingReport().body;
  parentReports: Array<{}> = [
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
    this.breadCrumbItems = [{ label: "MWO" }, { label: "Print", active: true }];
  }
}
