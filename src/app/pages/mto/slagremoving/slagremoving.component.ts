import { FluxMixingService } from "./../fluxmixing/fluxmixing.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "../melting/melting.service";

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
    private fluxingService: FluxMixingService
  ) {}

  meltingHeadingArray = this.meltingService.getMeltingReport().heading;
  meltingBodyArray = this.meltingService.getMeltingReport().body;
  fluxmixingHeadingArray = this.fluxingService.getFluxMixingReport().heading;
  fluxmixingBodyArray = this.fluxingService.getFluxMixingReport().body;

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
