import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-fas",
  templateUrl: "./fas.component.html",
  styleUrls: ["./fas.component.scss"],
  providers: [DecimalPipe],
})
export class FASComponent implements OnInit {
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;

  invoiceNumbers = [];
  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dispatch" },
      { label: "FAS", active: true },
    ];
    this.invoiceNumbers = [
      "IEPL/0148/22-23",
      "IEPL/0150/22-23",
      "IEPL/0151/22-23",
      "IEPL/0152/22-23",
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
