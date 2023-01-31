import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-transfertomwo",
  templateUrl: "./transfertomwo.component.html",
  styleUrls: ["./transfertomwo.component.scss"],
  providers: [DecimalPipe],
})
export class TransferToMwoComponent implements OnInit {
  headingArray = [
    [
      { heading: "Sl No", rowspan: "1" },
      { heading: "Date", rowspan: "1" },
      { heading: "Shift & Time", rowspan: "1" },
      { heading: "Melt Number", rowspan: "1" },
      { heading: "Scrap (KG)", rowspan: "1" },
      { heading: "Addition Details(KG)", colspan: "5" },
      { heading: "Melting Temperature", colspan: "2" },
    ],
    [
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "" },
      { heading: "Be (Grams)" },
      { heading: "Pure Alu" },
      { heading: "Zinc" },
      { heading: "Al Mn" },
      { heading: "Pure Mg" },
      { heading: "Value (°C)" },
      { heading: "Image" },
    ],
  ];
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Transfer to MWO", active: true },
    ];
  }
}
