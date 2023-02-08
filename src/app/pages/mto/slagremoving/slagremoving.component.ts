import { MaterialLoadingService } from "./../loadingofrm/loadingofrm.service";
import { FluxMixingService } from "./../fluxmixing/fluxmixing.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "../melting/melting.service";
import { SlagRemovingService } from "./slagremoving.service";

@Component({
  selector: "app-slagremoving",
  templateUrl: "./slagremoving.component.html",
  styleUrls: ["./slagremoving.component.scss"],
  providers: [DecimalPipe],
})
export class SlagRemovingComponent implements OnInit {
  hideme: boolean[] = [false, false, true];

  breadCrumbItems: Array<{}>;

  constructor(
    private materialLoadingService: MaterialLoadingService,
    private meltingService: MeltingService,
    private fluxingService: FluxMixingService,
    private slagremovingService: SlagRemovingService
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
    this.fluxingService.getFluxMixingReportForMeltNumber("meltNumber").heading;
  fluxmixingBodyArray =
    this.fluxingService.getFluxMixingReportForMeltNumber("meltNumber").body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReport().heading;
  slagremovingBodyArray = this.slagremovingService.getSlagRemovingReport().body;
  parentReports: Array<{}> = [
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
      heading: this.meltingHeadingArray,
      body: this.meltingBodyArray,
      children: true,
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Slag Removing", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
