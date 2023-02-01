import { MeltingService } from "./../melting/melting.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FluxMixingService } from "../fluxmixing/fluxmixing.service";

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
    private fluxingService: FluxMixingService
  ) {}

  meltingHeadingArray = this.meltingService.getMeltingReport().heading;
  meltingBodyArray = this.meltingService.getMeltingReport().body;
  fluxmixingHeadingArray = this.fluxingService.getFluxMixingReport().heading;
  fluxmixingBodyArray = this.fluxingService.getFluxMixingReport().body;

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
