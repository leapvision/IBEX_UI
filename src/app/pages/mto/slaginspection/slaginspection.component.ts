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
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;

  constructor(
    private meltingService: MeltingService,
    private fluxmixingService: FluxMixingService,
    private slagremovingService: SlagRemovingService,
    private slaginspectionService: SlagInspectionService
  ) {}

  meltingHeadingArray = this.meltingService.getMeltingReport().heading;
  meltingBodyArray = this.meltingService.getMeltingReport().body;
  fluxmixingHeadingArray = this.fluxmixingService.getFluxMixingReport().heading;
  fluxmixingBodyArray = this.fluxmixingService.getFluxMixingReport().body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReport().heading;
  slagremovingBodyArray = this.slagremovingService.getSlagRemovingReport().body;
  slaginspectionHeadingArray =
    this.slaginspectionService.getSlagInspectionReport().heading;
  slaginspectionBodyArray =
    this.slaginspectionService.getSlagInspectionReport().body;

  parentReports: Array<{}> = [
    {
      name: "Slag Removal",
      heading: this.slagremovingHeadingArray,
      body: this.slagremovingBodyArray,
    },
    {
      name: "Flux Mixing",
      heading: this.fluxmixingHeadingArray,
      body: this.fluxmixingBodyArray,
    },
    {
      name: "Melting",
      heading: this.meltingHeadingArray,
      body: this.meltingBodyArray,
    },
    {
      name: "Material Loading",
      heading: this.meltingHeadingArray,
      body: this.meltingBodyArray,
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Composition Check", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
