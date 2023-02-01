import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-fluxmixing-table",
  templateUrl: "./fluxmixing-table.component.html",
  styleUrls: ["./fluxmixing-table.component.scss"],
})
export class FluxMixingTableComponent implements OnInit {
  hideme: boolean[] = [false, false, true];

  @Input() HeadingArray: string[] = [];
  @Input() BodyArray: string[] = [];

  constructor() {}

  ngOnInit() {}

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
