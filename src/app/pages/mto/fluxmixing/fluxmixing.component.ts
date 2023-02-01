import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "../melting/melting.service";

@Component({
  selector: "app-fluxmixing",
  templateUrl: "./fluxmixing.component.html",
  styleUrls: ["./fluxmixing.component.scss"],
  providers: [DecimalPipe],
})
export class FluxMixingComponent implements OnInit {
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;

  constructor(private meltingService: MeltingService) {}

  meltingHeadingArray = this.meltingService.getMeltingReport().heading;
  meltingBodyArray = this.meltingService.getMeltingReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Flux Mixing", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
