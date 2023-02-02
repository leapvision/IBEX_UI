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
    private meltingService: MeltingService,
    private fluxingService: FluxMixingService,
    private slagremovingService: SlagRemovingService
  ) {}

  meltingHeadingArray = this.meltingService.getMeltingReport().heading;
  meltingBodyArray = this.meltingService.getMeltingReport().body;
  fluxmixingHeadingArray = this.fluxingService.getFluxMixingReport().heading;
  fluxmixingBodyArray = this.fluxingService.getFluxMixingReport().body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReport().heading;
  slagremovingBodyArray = this.slagremovingService.getSlagRemovingReport().body;
  parentReports: Array<{}> = [
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
      { label: "Slag Removing", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
