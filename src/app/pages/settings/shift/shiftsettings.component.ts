import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-shiftsettings",
  templateUrl: "./shiftsettings.component.html",
  styleUrls: ["./shiftsettings.component.scss"],
  providers: [DecimalPipe],
})
export class ShiftSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
