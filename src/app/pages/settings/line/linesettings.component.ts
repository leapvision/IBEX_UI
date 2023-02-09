import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-linesettings",
  templateUrl: "./linesettings.component.html",
  styleUrls: ["./linesettings.component.scss"],
  providers: [DecimalPipe],
})
export class LineSettingsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Settings" },
      { label: "Line", active: true },
    ];
  }
}
