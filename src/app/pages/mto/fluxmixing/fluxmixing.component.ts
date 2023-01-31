import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-fluxmixing",
  templateUrl: "./fluxmixing.component.html",
  styleUrls: ["./fluxmixing.component.scss"],
  providers: [DecimalPipe],
})
export class FluxMixingComponent implements OnInit {
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;
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
  bodyArray = [
    [
      { value: "22/12/2022" },
      { value: "" },
      { value: "MT-01-1001" },
      { value: "550" },
      { value: "50" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "0" },
      { value: "700" },
      { img: "assets/images/small/img-3.jpg" },
    ],
  ];

  constructor() {}

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
