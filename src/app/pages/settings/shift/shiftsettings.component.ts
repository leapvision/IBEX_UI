import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-shiftsettings",
  templateUrl: "./shiftsettings.component.html",
  styleUrls: ["./shiftsettings.component.scss"],
  providers: [DecimalPipe],
})
export class ShiftSettingsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Settings" },
      { label: "Shift", active: true },
    ];
  }
}
