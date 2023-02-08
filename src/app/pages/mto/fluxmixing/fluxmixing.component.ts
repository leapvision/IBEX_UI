import { MaterialLoadingService } from "./../loadingofrm/loadingofrm.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "../melting/melting.service";
import { FluxMixingService } from "./fluxmixing.service";

@Component({
  selector: "app-fluxmixing",
  templateUrl: "./fluxmixing.component.html",
  styleUrls: ["./fluxmixing.component.scss"],
  providers: [DecimalPipe],
})
export class FluxMixingComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private meltingService: MeltingService,
    private materialLoadingService: MaterialLoadingService,
    private fluxmixingService: FluxMixingService
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
  fluxmixingHeadingArray = this.fluxmixingService.getFluxMixingReport().heading;
  fluxmixingBodyArray = this.fluxmixingService.getFluxMixingReport().body;
  parentReports: Array<{}> = [
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

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Flux Mixing", active: true },
    ];
  }
}
