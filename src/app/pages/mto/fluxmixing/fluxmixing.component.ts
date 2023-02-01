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
  parentReports: Array<{}> = [{"name":'Melting','heading': this.meltingHeadingArray,'body':this.meltingBodyArray},
                              {"name":'Material Loading','heading': this.meltingHeadingArray,'body':this.meltingBodyArray}];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Flux Mixing", active: true },
    ];
    console.log(this.parentReports);
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
