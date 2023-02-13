import { MaterialLoadingService } from "./../loadingofrm/loadingofrm.service";
import { MeltingService } from "./../melting/melting.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FluxMixingService } from "../fluxmixing/fluxmixing.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { SlagInspectionService } from "./slaginspection.service";

@Component({
  selector: "app-slaginspection",
  templateUrl: "./slaginspection.component.html",
  styleUrls: ["./slaginspection.component.scss"],
  providers: [DecimalPipe],
})
export class SlagInspectionComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private materialLoadingService: MaterialLoadingService,
    private meltingService: MeltingService,
    private fluxmixingService: FluxMixingService,
    private slagremovingService: SlagRemovingService,
    private slaginspectionService: SlagInspectionService
  ) {}

  materialLoadingHeadingArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).heading;
  materialLoadingBodyArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).body;
  meltingHeadingArray =
    this.meltingService.getMeltingReportForMeltingNumber("meltNumber").heading;
  meltingBodyArray =
    this.meltingService.getMeltingReportForMeltingNumber("meltNumber").body;
  fluxmixingHeadingArray =
    this.fluxmixingService.getFluxMixingReportForMeltNumber("meltNumber")
      .heading;
  fluxmixingBodyArray =
    this.fluxmixingService.getFluxMixingReportForMeltNumber("meltNumber").body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .heading;
  slagremovingBodyArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .body;
  slaginspectionHeadingArray =
    this.slaginspectionService.getSlagInspectionReport().heading;
  slaginspectionBodyArray =
    this.slaginspectionService.getSlagInspectionReport().body;

  parentReports: Array<{}> = [
    {
      name: "Slag Removal",
      heading: this.slagremovingHeadingArray,
      body: this.slagremovingBodyArray,
      children: true,
    },
    {
      name: "Flux Mixing",
      heading: this.fluxmixingHeadingArray,
      body: this.fluxmixingBodyArray,
      children: true,
    },
    {
      name: "Melting",
      heading: this.meltingHeadingArray,
      body: this.meltingBodyArray,
      children: true,
    },
    {
      name: "Material Loading",
      heading: this.materialLoadingHeadingArray,
      body: this.materialLoadingBodyArray,
      children: true,
    },
  ];

  inspectionSamples = [
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
  ];

  samplesArray = this.slaginspectionService.samplesArray;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Composition Check", active: true },
    ];
  }
}
