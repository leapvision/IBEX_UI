import { PackingService } from "./../packing/packingingots/packingingots.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MaterialLoadingService } from "../mto/loadingofrm/loadingofrm.service";
import { MeltingService } from "../mto/melting/melting.service";
import { FluxMixingService } from "../mto/fluxmixing/fluxmixing.service";
import { SlagRemovingService } from "../mto/slagremoving/slagremoving.service";
import { TransferToMwoService } from "../mwo/transfertomwo/transfertomwo.service";
import { IgnotPouringService } from "../mwo/ingotpouring/ingotpouring.service";
import { VisualInspectionService } from "../mwo/visualinspection/visualinspection.service";
import { BuffingAndPolishingService } from "../mwo/buffingandpolishing/buffingandpolishing.service";
import { PrintingService } from "../mwo/printing/printing.service";
import { FinalInspectionService } from "../mwo/finalinspection/finalinspection.service";
import { FASService } from "../dispatch/fas/fas.service";
import { FinalDispatchService } from "../dispatch/finaldispatch/finaldispatch.service";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
  providers: [DecimalPipe],
})
export class ReportsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  showInspectionReportFlag = false;

  hideme: boolean[] = [false, false, true];
  heatNumbers = [];

  constructor(
    private materialloadingService: MaterialLoadingService,
    private meltingService: MeltingService,
    private fluxmixingService: FluxMixingService,
    private slagremovingmtoService: SlagRemovingService,
    private transfertomwoService: TransferToMwoService,
    private ingotpouringService: IgnotPouringService,
    private visualinspectionService: VisualInspectionService,
    private buffpolishService: BuffingAndPolishingService,
    private printingService: PrintingService,
    private finalinspectionService: FinalInspectionService,
    private packingService: PackingService,
    private fasService: FASService,
    private dispatchService: FinalDispatchService
  ) {}

  mlHeadingArray =
    this.materialloadingService.getMaterialLoadingReportForMeltNumber(
      "heatnumber"
    ).heading;
  mlBodyArray =
    this.materialloadingService.getMaterialLoadingReportForMeltNumber(
      "heatnumber"
    ).body;
  meltingHeadingArray =
    this.meltingService.getMeltingReportForMeltingNumber("heatnumber").heading;
  meltingBodyArray =
    this.meltingService.getMeltingReportForMeltingNumber("heatnumber").body;
  fluxmixingHeadingArray =
    this.fluxmixingService.getFluxMixingReportForMeltNumber("heatnumber")
      .heading;
  fluxmixingBodyArray =
    this.fluxmixingService.getFluxMixingReportForMeltNumber("heatnumber").body;
  slagremovingmtoHeadingArray =
    this.slagremovingmtoService.getSlagRemovingReportForMeltNumber("heatnumber")
      .heading;
  slagremovingmtoBodyArray =
    this.slagremovingmtoService.getSlagRemovingReportForMeltNumber("heatnumber")
      .body;

  transfertomwoHeadingArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("heatnumber")
      .heading;
  transfertomwoBodyArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("heatnumber")
      .body;
  ingotpouringHeadingArray =
    this.ingotpouringService.getIngotPouringReportForMeltNumber("heatnumber")
      .heading;
  ingotpouringBodyArray =
    this.ingotpouringService.getIngotPouringReportForMeltNumber("heatnumber")
      .body;
  visualinspectionHeadingArray =
    this.visualinspectionService.getVisualInspectionForMeltNumber("heatnumber")
      .heading;
  visualinspectionBodyArray =
    this.visualinspectionService.getVisualInspectionForMeltNumber("heatnumber")
      .body;
  buffpolishHeadingArray =
    this.buffpolishService.getBuffingAndPolishingForMeltNumber("heatnumber")
      .heading;
  buffpolishBodyArray =
    this.buffpolishService.getBuffingAndPolishingForMeltNumber("heatnumber")
      .body;
  printingHeadingArray =
    this.printingService.getPrintingForHeatNumber("heatnumber").heading;
  printingBodyArray =
    this.printingService.getPrintingForHeatNumber("heatnumber").body;
  finalinspectionHeadingArray =
    this.finalinspectionService.getFinalInspectionForHeatNumber("heatnumber")
      .heading;
  finalinspectionBodyArray =
    this.finalinspectionService.getFinalInspectionForHeatNumber("heatnumber")
      .body;
  packingHeadingArray =
    this.packingService.getPackingForHeatNumber("heatnumber").heading;
  packingBodyArray =
    this.packingService.getPackingForHeatNumber("heatnumber").body;
  fasHeadingArray =
    this.fasService.getFASForInvoiceNumber("heatnumber").heading;
  fasBodyArray = this.fasService.getFASForInvoiceNumber("heatnumber").body;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: "Reports" }];
    this.heatNumbers = [
      "IBEX-MW-01-22122022",
      "IBEX-MW-01-20122022",
      "IBEX-MW-02-21122022",
      "IBEX-MW-02-25122022",
      "IBEX-MW-01-10012023",
      "IBEX-MW-02-11012023",
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

  showInspectionReport() {
    this.showInspectionReportFlag = !this.showInspectionReportFlag;
  }
}
